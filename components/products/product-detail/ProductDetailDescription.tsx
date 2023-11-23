"use client";

import Skeleton from "react-loading-skeleton";

export default function ProductDetailDescription({ description }: { description?: string }) {
    return (
        <div className="service-wrap">
            <h5>Product Detail</h5>
            {description && <p dangerouslySetInnerHTML={{ __html: description }}></p>}
            {!description && <Skeleton />}
        </div>
    )
}