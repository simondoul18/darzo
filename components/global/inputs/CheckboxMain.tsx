"use client";
export default function CheckboxMain({ classNames, label, order, register, labelClassName, onChange, checked }: { classNames?: string, label: string, order?: string, register?: any, labelClassName?: any, onChange?: any, checked?: boolean }) {
    return (
        <label className={`flex gap-2 cursor-pointer ${order && order === 'reverse' ? 'flex-row-reverse justify-end' : ''}`}>
            <div className={`text-gray-600 my-auto ${labelClassName}`}>{label}</div>
            <input type="checkbox" className={`form-check-input ${classNames} my-auto`} {...register} onChange={onChange} checked={checked} />
        </label>
    )
}