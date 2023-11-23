"use client"
import SlickSpinner from "../loaders/SlickSpinner";

export default function ImageUploaderBox({ onChangeCallback, showUploaderSpinner }: { onChangeCallback?: any, showUploaderSpinner?: boolean }) {
    return (
        <label className="min-h-[160px] min-w-[140px] !border-2 border-dashed border- border-blue-600 rounded-lg bg-gray-50 cursor-pointer flex justify-center items-center relative">
            <div className="flex flex-col">
                <div className="flex gap-1"><span className="text-sm text-blue-500 font-bold my-auto hover:underline">Click to upload</span> <span className="my-auto text-gray-500 font-bold">or</span></div>
                <div className="text-gray-500 font-bold">drag and drop</div>
            </div>

            <input type="file" className="opacity-0 w-1 h-1" onChange={onChangeCallback} />

            {showUploaderSpinner && <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-gray-300 bg-opacity-30 z-50">
                <SlickSpinner classNames="!border-t-gray-800" />
            </div>}
        </label>
    )
}