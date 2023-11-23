"use client";
import Modal from 'react-bootstrap/Modal';
import ButtonMain from '../global/buttons/ButtonMain';
import InputMain from '../global/inputs/InputMain';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CountryInterface from '@/interfaces/Countries/CountryInterface';
import { useEffect, useState } from 'react';
import CountriesService from '@/services/fetch/Countries/CountriesService';
import SelectInputInterface from '@/interfaces/SelectInput/SelectInputInterface';
import { AxiosResponse } from 'axios';
import SelectMain from '../global/inputs/SelectMain';
import CustomerAddressService from '@/services/fetch/CustomerAddress/CustomerAddressService';
import CustomerAddressInterface from '@/interfaces/CustomerAddresses/CustomerAddressInteface';
import Skeleton from 'react-loading-skeleton';
import OriginResponse from '@/interfaces/Origin/OriginResponse';

export default function AddressManageModal({ showAddressManageModal, id }: { showAddressManageModal?: any, id?: number | null }) {

    useEffect(() => {
        // fetchCountries('');

        if (id) {
            fetchAddressWithId();
        } else {
            setloadingCustomerAddress(false);
        }

        return () => {
            reset();
            setloadingCustomerAddress(false);
        }
    }, [id]);

    let [countries, setCountries] = useState<SelectInputInterface[]>();
    let [loadingCustomerAddress, setloadingCustomerAddress] = useState<boolean>(true);
    let [showLoaderonSubmitButton, setShowLoaderonSubmitButton] = useState<boolean>(false);
    let [countryDefaultOption, setCountryDefaultOption] = useState<SelectInputInterface>();

    const addressForm: any = Yup.object().shape({
        address_name: Yup.string().required('Address title is required.'),
        full_name: Yup.string().required('Full name is required.'),
        email: Yup.string().email("Email is invalid.").nullable(),
        phone: Yup.string().nullable(),
        address_line_1: Yup.string().required('Address is required.'),
        address_line_2: Yup.string().nullable('Password is required.'),
        city: Yup.string().required('City is required.'),
        region: Yup.string().nullable(),
        zip: Yup.string().required('Zip code is required.'),
        country_id: Yup.number().required('Country is required.'),
    });

    const loginParams = { resolver: yupResolver(addressForm) };
    const { register, handleSubmit, formState, setValue, reset } = useForm(loginParams);
    const { errors } = formState;

    function addressRequestHandler(e: any) {
        setShowLoaderonSubmitButton(true);
        let addressService = new CustomerAddressService;
        if (id) {
            addressService.updateCustomerAddress(e, id).then((response: AxiosResponse<OriginResponse<CustomerAddressInterface>>) => {
                showAddressManageModal(null, true);
                setShowLoaderonSubmitButton(false);
            });
        } else {
            addressService.createCustomerAddress(e).then((response: AxiosResponse<OriginResponse<CustomerAddressInterface>>) => {
                showAddressManageModal(null, true);
                setShowLoaderonSubmitButton(false);
            });
        }
    }

    function fetchCountries(search: string) {
        let countriesService = new CountriesService;
        countriesService.countries(search).then((response: AxiosResponse<OriginResponse<CountryInterface[]>>) => {
            let options: SelectInputInterface[] | undefined = response.data.data?.map((country: CountryInterface) => {
                return { label: country.name, value: country.id }
            });

            setCountries(options);
        });
        return countries;
    }

    const countriesOptionPromise = (inputValue: string) =>
        new Promise<SelectInputInterface[]>((resolve: any) => {
            resolve(fetchCountries(inputValue));
        });

    function fetchAddressWithId() {
        let addressService = new CustomerAddressService;
        addressService.getAuthUserAddresses({
            "include": "country", "filter": "id:" + id
        }).then((response: AxiosResponse<OriginResponse<CustomerAddressInterface[]>>) => {
            initializeAddressForm(response.data.data && response.data.data?.length > 0 ? response.data.data[0] : null);
            setloadingCustomerAddress(false);
        })
    }

    function initializeAddressForm(address: CustomerAddressInterface | null) {
        if (address) {
            setValue('address_name', address.address_name);
            setValue('full_name', address.full_name);
            setValue('email', address.email);
            setValue('phone', address.phone);
            setValue('address_line_1', address.address_line_1);
            setValue('address_line_2', address.address_line_2);
            setValue('city', address.city);
            setValue('region', address.region);
            setValue('zip', address.zip);
            setValue('country_id', address.country_id);

            setCountryDefaultOption({
                label: address?.country?.name,
                value: address?.country?.id
            });
        }
    }

    function selectCountry(e: any) {
        setValue('country_id', e.value);
    }


    return (
        <>
            <Modal show={true} onHide={showAddressManageModal} animation={false} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title as={'h6'} className='!text-xl'>Customer Address</Modal.Title>
                </Modal.Header>
                {!loadingCustomerAddress ? (
                    <form onSubmit={handleSubmit(addressRequestHandler)}>
                        <Modal.Body>
                            <div className="w-full flex flex-col gap-2">
                                <InputMain label='Address title' placeholder='Title of these shipping details' register={register('address_name')} error={errors?.address_name} />
                                <div className="flex flex-col">
                                    <h6 className="">Contact details</h6>
                                    <InputMain label='Full name' placeholder='John Doe.' register={register('full_name')} error={errors?.full_name} />
                                    <InputMain label='Email' placeholder='abc@example.com' register={register('email')} error={errors?.email} />
                                    <InputMain label='Phone' placeholder='xxx xxx xxxx' register={register('phone')} error={errors?.phone} />
                                </div>
                                <div className="flex flex-col">
                                    <h6 className="">Delivery details</h6>
                                    <InputMain label='Address line 1' placeholder='Street address' register={register('address_line_1')} error={errors?.address_line_1} />
                                    <InputMain label='Address line 2' placeholder='Appartment, suite, unit, building, floor' register={register('address_line_2')} error={errors?.address_line_2} />
                                    <div className="row">
                                        <div className="col-6">
                                            <InputMain label='City' placeholder='Enter city' register={register('city')} error={errors?.city} />
                                        </div>
                                        <div className="col-6">
                                            <InputMain label='State/Province/Region' placeholder='Enter State/Province/Region' register={register('region')} error={errors?.region} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-6">
                                            <InputMain label='ZIP/Postal Code' placeholder='Enter Zip code' register={register('zip')} error={errors?.zip} />
                                        </div>
                                        <div className="col-6">
                                            {/* @ts-ignore */}
                                            <SelectMain options={countries} label="Countries" promise={countriesOptionPromise} closeMenuOnSelect={true} error={errors?.country_id} changeHandler={selectCountry} defaultValue={countryDefaultOption} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <ButtonMain text="Close" scheme='btn-outline-dark' classNames='px-3 py-2.5 w-24' click={showAddressManageModal} />
                            <ButtonMain text={id ? "Update" : "Save"} scheme='btn-primary' classNames='w-36' showLoaderOnRequest={showLoaderonSubmitButton} />
                        </Modal.Footer>
                    </form>
                ) : (
                    <Modal.Body>
                        <div className="row">
                            <div className="col-12">
                                <div className="w-48">
                                    <Skeleton />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="w-10/12">
                                    <Skeleton />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="w-10/12">
                                    <Skeleton />
                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <div className="w-48">
                                    <Skeleton />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="w-10/12">
                                    <Skeleton />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="w-7/12">
                                    <Skeleton />
                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <div className="w-48">
                                    <Skeleton />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="w-10/12">
                                    <Skeleton />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="w-7/12">
                                    <Skeleton />
                                </div>
                            </div>

                            <div className="col-12 mt-4">
                                <div className="w-48">
                                    <Skeleton />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="w-10/12">
                                    <Skeleton />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="w-7/12">
                                    <Skeleton />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                )}
            </Modal>
        </>
    );
}