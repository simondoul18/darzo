"use client"
import { useRouter } from "next/navigation";
import { ArrowLeft } from "react-feather";

export default function BackNavigation({ title, backText }: { title: string, backText: string }) {
    let router = useRouter();
    return (
        <div className="flex gap-3">
            <div className="my-auto" onClick={() => router.back()}>
                <ArrowLeft size={24} className="cursor-pointer text-gray-500 hover:text-gray-700" />
            </div>

            <div className="flex flex-col gap-1">
                <div className="text-sm text-gray-600">{backText}</div>
                <div className="text-3xl font-bold text-gray-800">{title}</div>
            </div>
        </div>
    )
}