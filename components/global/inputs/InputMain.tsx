"use client"
export default function InputMain({ type, placeholder, classNames, label, register, error, onChange, onKeyUp, value }: { type?: string, placeholder?: string, classNames?: string, label?: string, register?: any, error?: any, onChange?: any, onKeyUp?: any, value?: any }) {
    return (
        <label className="flex flex-col gap-2">
            <div className="text-gray-800">{label}</div>
            <input type={type ? type : 'text'} className={`form-control px-[7px] py-[7px] ${classNames} ${error ? 'is-invalid' : ''}`} placeholder={placeholder} {...register} onChange={onChange} onKeyUp={onKeyUp} value={value} />
            <div className="invalid-feedback">{error?.message}</div>
        </label>
    )
}