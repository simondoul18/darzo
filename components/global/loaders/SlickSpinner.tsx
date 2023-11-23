"use client";
export default function SlickSpinner(props: { classNames?: string }) {
    return (
        <span className={`slick-loader h-6 w-6 ${props.classNames}`}></span>
    )
}