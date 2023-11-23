"use client"
import Image from "next/image";
import { X } from 'react-feather';

export default function ImageBoxPlaceholder({ url, removeImageFromIndex }: { url: string, removeImageFromIndex?: any }) {
    return (
        <div className="min-h-[150px] min-w-[140px] rounded-lg bg-gray-50 cursor-pointer flex justify-center items-center border relative group">
            <Image src={url} alt="Produc pic" width="140" height="150" style={{
                objectFit: 'contain',
                borderRadius: '8px'
            }} />

            <div className="absolute top-0 right-0 opacity-0 group-hover:!opacity-100 transition duration-300" onClick={removeImageFromIndex}>
                <div className="ml-auto -mt-2 -mr-2 px-0.5 py-0.5 bg-red-500 mb-auto text-white rounded flex justify-center items-center"><X size={14} /></div>
            </div>
        </div>
    )
}