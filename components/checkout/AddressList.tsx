"use client";
import AddNewAddressPlaceholdeer from "@/components/global/Placeholders/Checkout/AddNewAddressPlaceholder";
import AddressPlaceholder from "@/components/global/Placeholders/Checkout/AddressPlaceholder";
import CustomerAddressInterface from "@/interfaces/CustomerAddresses/CustomerAddressInteface";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import CustomerAddressService from "@/services/fetch/CustomerAddress/CustomerAddressService";
import { AxiosResponse } from "axios";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const AddressManageModal = dynamic(() => import('@/components/modals/AddressManageModal'), { ssr: false })

export default function AddressList({ addressChangeHandler }: { addressChangeHandler?: any }) {

    useEffect(() => {
        fetchAddresses();
    }, []);


    let addressService = new CustomerAddressService();

    let [showAddressManageModal, setShowAddressManageModal] = useState<boolean>(false);
    let [loadedAddressModalIndex, setLoadedAddressModalIndex] = useState<number | null>(null);
    let [selectedAddress, setSelectedAddress] = useState<number | null>(null);
    let [addresses, setAddresses] = useState<CustomerAddressInterface[]>();


    function addressManageModalHandler(index: number | null = null, success: boolean = false) {
        setShowAddressManageModal(!showAddressManageModal);

        if (success) {
            fetchAddresses();
        }

        if (index != null) {
            setLoadedAddressModalIndex(index);

        } else {
            setLoadedAddressModalIndex(null);
        }
    }

    function fetchAddresses() {
        addressService.getAuthUserAddresses({
            "include": "country"
        }).then((response: AxiosResponse<OriginResponse<CustomerAddressInterface[]>>) => {
            setAddresses(response.data.data);
            setSelectedAddress(response.data.data && response.data.data?.length > 0 ? response.data.data[0]?.id : null);
            selectAddressForDelivery(response.data.data && response.data.data?.length > 0 ? response.data.data[0]?.id : null);
        })
    }

    function selectAddressForDelivery(id: number | null) {
        setSelectedAddress(id);
        addressChangeHandler(id);
    }

    return (
        <>
            <h5 className="pay-title">Shipping</h5>
            <div className="flex gap-4 flex-wrap">
                <AddNewAddressPlaceholdeer onClickHandler={() => addressManageModalHandler(null)} />

                {addresses && addresses.map((address, i) => {
                    return (
                        <AddressPlaceholder isSelected={selectedAddress == address.id} addressModalHandler={addressManageModalHandler} key={i} address={address} onClick={selectAddressForDelivery} />
                    );
                })}

                {!addresses && (
                    <>
                        <div className="w-52 h-36">
                            <Skeleton className="!w-32" />
                            <Skeleton className=" mt-4" />
                            <Skeleton className="!w-36" />
                            <Skeleton className="!w-32 mt-4" />
                        </div>

                        <div className="w-52 h-36">
                            <Skeleton className="!w-32" />
                            <Skeleton className=" mt-4" />
                            <Skeleton className="!w-36" />
                            <Skeleton className="!w-32 mt-4" />
                        </div>
                    </>
                )}
            </div>
            {showAddressManageModal ? <AddressManageModal showAddressManageModal={addressManageModalHandler} id={loadedAddressModalIndex} /> : ''}
        </>
    )
}