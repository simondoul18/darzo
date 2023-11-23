"use client";

import Skeleton from "react-loading-skeleton";

export default function ProductPlaceholderSkeleton({ count }: { count?: number }) {
    return (
        <div className="flex flex-col border rounded px-3 py-3">
            <Skeleton className="h-64" />

            <div className="w-11/12 mt-6">
                <Skeleton className="h-6" />
            </div>
            <div className="w-24 mt-2">
                <Skeleton className="h-6" />
            </div>

            <div className="w-32 mt-2">
                <Skeleton className="h-6" />
            </div>

            <div className="w-24 mt-2">
                <Skeleton className="h-12" />
            </div>
        </div>
    )
}