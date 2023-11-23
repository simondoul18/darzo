"use client";

import { service_54 } from "@/storage/image";
import Image from "next/image";

export default function CategoriesPlaceholder({ name, onClick }: { name: string, onClick?: any }) {
    return (
        <div className="px-3 py-3 bg-white opacity-95 text-base text-center hover:!bg-main-tealish-800 hover:text-white cursor-pointer transition duration-300 rounded shadow-sm text-main-tealish-900 border !border-gray-300 hover:!border-main-tealish-800" onClick={onClick}>{name}</div>
    )
}