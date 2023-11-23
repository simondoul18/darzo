"use client"
import dynamic from "next/dynamic";
import { useState } from "react";
import 'react-quill/dist/quill.bubble.css';

const ReactQuill = dynamic(
    () => {
        return import('react-quill');
    },
    { ssr: false }
);
export default function TextEditor({ label, editorValue, changeHandler }: { label: string, editorValue?: string, changeHandler?: any }) {
    return (
        <label className="flex flex-col gap-2 border-danger">
            <div className="text-gray-600 font-semibold">{label}</div>
            <ReactQuill theme="bubble" value={editorValue} onChange={changeHandler} className="border !border-gray-300 rounded min-h-[300px] overflow-visible" placeholder="Product description...." />
        </label>
    )
}