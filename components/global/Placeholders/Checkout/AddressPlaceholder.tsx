"use client";
import CustomerAddressInterface from "@/interfaces/CustomerAddresses/CustomerAddressInteface";
import { Edit2 } from "react-feather";

export default function AddressPlaceholder({ isSelected, addressModalHandler, address, onClick }: { isSelected?: boolean, addressModalHandler?: any, address?: CustomerAddressInterface, onClick: any }) {

    return (
        <div className={`w-52 h-36 flex rounded cursor-pointer group flex-col transition duration-300 bg-gray-50 px-2 py-2 relative border-solid overflow-hidden select-none ${isSelected ? '!border border-green-500' : '!border border-gray-400 hover:border-gray-500'}`} onClick={() => onClick(address?.id)}>
            <div className="flex">
                <div className="text-smx font-semibold text-gray-800 my-auto">{address?.address_name}</div>
                <div className="ml-auto my-auto" onClick={(e) => { addressModalHandler(address?.id); e.stopPropagation() }}>
                    <Edit2 size={14} />
                </div>
            </div>
            <div className="text-xs line-clamp-4 mt-1">{address?.address_line_1 ? address?.address_line_1 + ',' : ''} {address?.address_line_2 ? address?.address_line_2 + ',' : ''} {address?.city ? address?.city + ',' : ''} {address?.zip ? address?.zip + ',' : ''} {address?.region ? address?.region + ',' : ''} {address?.country?.name}</div>

            {
                address?.phone && (
                    <div className="flex gap-1 text-sm mt-3 font-semibold">
                        <div className="">Mobile:</div>
                        <div className="">{address?.phone}</div>
                    </div>
                )
            }

            {
                !address?.phone && address?.email && (
                    <div className="flex gap-1 text-sm mt-3 font-semibold">
                        <div className="">Mobile:</div>
                        <div className="">{address?.email}</div>
                    </div>
                )
            }

            {isSelected && (
                <div className="absolute -top-6 -right-4 opacity-100">
                    <div className="w-8 h-8 transform rotate-45 bg-green-500 text-white">
                    </div>
                </div>
            )}
        </div>
    );
}