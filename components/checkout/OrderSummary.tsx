"use client";
import { avatar_01, coupon_icon } from "@/storage/image";
import Image from "next/image";
import { MapPin } from "react-feather";
import ProductInterface from "@/interfaces/Products/ProductInterface";
import CategoryBadge from "../products/CategoryBadge";
import Skeleton from "react-loading-skeleton";


export default function OrderSummary({ product }: { product?: ProductInterface | null }) {
    return (
        <>
            <h5 className="pay-title">Order Summary</h5>
            <div className="summary-box">
                <div className="booking-info">
                    <div className="service-book">
                        <div className="service-book-img my-auto">
                            {product && product.images?.length > 0 ? (
                                <Image
                                    src={product?.images[0].url}
                                    alt="img"
                                    width={300}
                                    height={300}
                                />
                            ) : (
                                <div className="w-28 h-24">
                                    <Skeleton className="w-full h-full" />
                                </div>
                            )}
                        </div>
                        <div className="serv-profile flex flex-col">
                            {
                                product ? (
                                    <>
                                        <h2>{product?.name}</h2>
                                        <ul>
                                            <li className="serv-pro">
                                                <Image
                                                    src={avatar_01}
                                                    alt="img"
                                                />
                                            </li>
                                            <li className="serv-review">
                                                <i className="fa-solid fa-star" />{" "}
                                                <span>4.9 </span>(255 reviews)
                                            </li>
                                            <li className="service-map">
                                                <MapPin /> Alabama, USA
                                            </li>
                                        </ul>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {
                                                product && product.images?.length > 0 && product?.categories.map((category: any, i) => {
                                                    return <CategoryBadge name={category?.label} key={i} />
                                                })
                                            }
                                        </div>
                                    </>
                                ) : (
                                    <div className="w-52 flex flex-col justify-between h-full">
                                        <Skeleton className="w-full" />
                                        <Skeleton className="w-full" />
                                        <Skeleton className="w-full" />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="booking-summary">
                    <ul className="booking-date">
                        <li>
                            Date <span>{(new Date).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: 'short',
                                year: 'numeric',
                            })}</span>
                        </li>
                        <li>
                            Service Provider <span>Thomas Herzberg</span>
                        </li>
                    </ul>
                    <ul className="booking-date">
                        <li>
                            Subtotal <span>{product?.currency?.symbol} {product?.price}</span>
                        </li>
                    </ul>
                    <div className="booking-total">
                        <ul className="booking-total-list">
                            <li>
                                <span>Total</span>
                                <span className="total-cost">{product?.currency?.symbol} {product?.price}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="booking-coupon">
                <div className="form-group w-100">
                    <div className="coupon-icon">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Coupon Code"
                        />
                        <span>
                            <Image src={coupon_icon} alt="" />
                        </span>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary apply-btn">
                        Apply
                    </button>
                </div>
            </div>
            {/* <div className="save-offer">
                <p>
                    Your total
                    saving on this order $5.00
                </p>
            </div> */}
        </>
    )
}