"use client";

import Skeleton from "react-loading-skeleton";

export default function CategoryBadge(props: { name: string }) {
    return (
        <div className="">
            <span className="badge !bg-sky-100 !text-blue-500 cursor-pointer">{props.name}</span>
        </div>
    )
}