"use client";
import { PlusCircle } from "react-feather";

export default function AddNewAddressPlaceholder({ onClickHandler }: { onClickHandler?: any }) {
    return (
        <div className="w-32 h-36 !border flex justify-center items-center rounded border-dashed border-gray-400 hover:border-blue-500 cursor-pointer group flex-col transition duration-300 bg-gray-50" onClick={onClickHandler}>
            <div className="group-hover:-translate-y-3 transition duration-300 group-hover:text-blue-500">
                <PlusCircle />
            </div>
            <div className="group-hover:block hidden transition duration-300 text-xs group-hover:text-blue-500">Add new address</div>
        </div>
    );
}