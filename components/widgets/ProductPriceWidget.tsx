"use client";
import { avatar_02 } from "@/storage/image";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
export default function ProductPriceWidget({ price, currency }: { price: any, currency: any }) {
    return (
        <div className="provide-widget w-full">
            {price && (
                <div className="service-amount">
                    <h5>
                        {currency?.symbol} {price}<span>{currency?.symbol} {price}</span>
                    </h5>
                    <p className="serv-review">
                        <i className="fa-solid fa-star" /> <span>4.9 </span>(255
                        reviews)
                    </p>
                </div>
            )}
            {!price && <Skeleton className="w-full" />}
            {/* <div className="serv-proimg">
                <Image
                    src={avatar_02}
                    className="img-fluid"
                    alt="img"
                />
                <span>
                    <i className="fa-solid fa-circle-check" />
                </span>
            </div> */}
        </div>
    )
}