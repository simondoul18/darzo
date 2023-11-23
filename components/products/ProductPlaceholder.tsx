"use client";

import CurrencyInterface from "@/interfaces/Currencies/CurrencyInterface";
import ProductImageInterface from "@/interfaces/Products/ProductImageInterface";
import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, Star } from "react-feather";
export default function ProductPlaceholder({ name, price, images, currency, uuid }: { name: string, price: number, images?: ProductImageInterface[], currency?: CurrencyInterface, uuid?: string }) {
    return (
        <div className="service-widget aos border rounded-lg" data-aos="fade-up">
            <div className="service-img h-72">
                <Link href={"/products/" + uuid}>
                    {images && images.length > 0 ? <Image className="!object-contain w-full h-full" alt={name} src={images[0]?.url} width={300} height={300} style={{ objectFit: "contain" }} priority={false} /> : <></>}
                </Link>
                <div className="fav-item ">
                    <div className="features-service-five">
                        <div className="features-service-rating flex gap-2">
                            <Star size={18} className="my-auto fill-yellow-500 text-yellow-500" /><span className="my-auto">4.8</span>
                        </div>
                        <h6>Featured</h6>
                    </div>
                    <a href="#!" className="fav-icon fav-icon-five">
                        <Heart size={18} />
                    </a>
                </div>
            </div>
            <div className="service-content service-feature-five">
                <h3 className="title">
                    <Link href={"/products/" + uuid}>{name}</Link>
                </h3>
                <p><MapPin size={18} /> Europe</p>
                <div className="feature-services-five">
                    <h6>{currency?.symbol} {price}</h6><span className="hidden">{currency?.symbol}{price}</span>
                </div>
                <div className="feature-service-botton mt-4">
                    <div className="feature-service-btn">
                        <Link href={"/products/" + uuid}>Buy now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}