"use client";
import SelectInputInterface from '@/interfaces/SelectInput/SelectInputInterface';
import AsyncSelect from 'react-select/async';

export default function SelectMain({ label, options, isMulti, promise, closeMenuOnSelect, changeHandler, error, defaultValue, className }: { label: string, options: SelectInputInterface[], isMulti?: boolean, promise?: any, closeMenuOnSelect?: boolean, changeHandler?: any, error?: any, defaultValue?: any, className?: string }) {
    return (
        <label className="flex flex-col gap-y-2">
            <div className="text-gray-700">{label}</div>
            <AsyncSelect cacheOptions loadOptions={promise} defaultOptions={options} options={options} value={defaultValue} styles={{
                control: base => ({
                    ...base,
                    border: error ? "1px solid red" : "1px solid #ced4da",
                    backgroundColor: 'none',
                    padding: '1px',
                    borderRadius: '0.375rem'
                })
            }} className={`!border rounded !border-red-300 focus:border-white is-invalid ${className}`} isMulti={isMulti} closeMenuOnSelect={closeMenuOnSelect ?? false} onChange={changeHandler} />
            <div className="invalid-feedback">{error?.message}</div>
        </label>
    )
}