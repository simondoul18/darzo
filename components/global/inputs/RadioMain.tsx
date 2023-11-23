"use client";
export default function RadioMain({ classNames, label, name, order }: { classNames?: string, label: string, name?: string, order?: string }) {
    return (
        <label className={`flex gap-2 cursor-pointer ${order && order === 'reverse' ? 'flex-row-reverse' : ''}`}>
            <div className="text-gray-600 font-semibold my-auto">{label}</div>
            <input type="radio" className={`form-check-input ${classNames} my-auto`} name={name} />
        </label>
    )
}