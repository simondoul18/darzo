"use client";
import Link from "next/link";
import Image from "next/image";
import { avatar_02 } from "@/storage/image";
import ProductInterface from "@/interfaces/Products/ProductInterface";
import { Check, Facebook, Feather, Mail, Share, Twitter } from "react-feather";
import Skeleton from "react-loading-skeleton";

export default function ProductDetailAttributes({ product }: { product?: ProductInterface }) {
    return (
        <div className="service-wrap provide-service fle flex-col">
            <h5>Attributes</h5>
            {
                product && (
                    <div className="row">
                        <div className="col-md-4">
                            <div className="provide-box flex gap-2">
                                <div className="w-8 h-7 rounded-full" style={{ backgroundColor: product?.attributes?.color }}>

                                </div>
                                <div className="provide-info w-full my-auto">
                                    <h6 className="mt-1.5">Color</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="provide-box">
                                <span>
                                    <i className="feather-mail" ><Feather /></i>
                                </span>
                                <div className="provide-info">
                                    <h6>Weight</h6>
                                    <p>{product?.attributes?.weight} KG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {!product && <Skeleton count={3} />}
            <h5 className="mt-4">Other attributes</h5>
            {product && (
                <div className="row">
                    {product?.custom_attributes && product?.custom_attributes.map((att, i) => {
                        return (
                            <div className="col-md-4" key={i}>
                                <div className="provide-box">
                                    <span>
                                        <div className="bg-green-500 bg-opacity-25 text-green-600 w-8 h-8 rounded-full flex justify-center items-center"><Check size={18} /></div>
                                    </span>
                                    <div className="provide-info">
                                        <h6>{att.name}</h6>
                                        <p>{att.value}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
            {!product && <Skeleton count={3} />}
            <h5 className="mt-4">Share</h5>
            {product && (
                <div className="col-md-4">
                    <div className="social-icon provide-social">
                        <ul>
                            <li>
                                <Link href="#" target="_blank">
                                    <i className="feather-instagram" ><Twitter /></i>{" "}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" target="_blank">
                                    <i className="feather-twitter" ><Facebook /></i>{" "}
                                </Link>
                            </li>
                            <li>
                                <Link href="#" target="_blank">
                                    <i className="feather-youtube" ><Share /></i>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" target="_blank">
                                    <i className="feather-linkedin" ><Mail /></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {!product && <Skeleton count={1} />}
        </div>
    )
}