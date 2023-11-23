"use client";
import ProductHeading from "@/components/products/ProductHeading";

import CategoryBadge from "../CategoryBadge";
import { MapPin } from "react-feather";
import Skeleton from "react-loading-skeleton";
export default function ProductHeadingWrapper({ heading, categories }: { heading?: string, categories?: any[] }) {
    return (
        <div className="col-md-8">
            <div className="serv-profile">
                <ProductHeading heading={heading} />
                {!heading && <Skeleton />}
                <ul>
                    <li className="service-map">
                        <MapPin size={16} /> Europe
                    </li >
                    <li>
                        <div className="flex gap-2">
                            {categories && categories.map((category, i) => {
                                return (<CategoryBadge name={category?.label} key={i} />)
                            })}
                        </div>
                    </li>
                </ul >
            </div >
        </div >
    )
}