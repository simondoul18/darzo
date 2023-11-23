"use client";
import { service_04, avatar_01 } from "@/storage/image";
import Link from 'next/link';
import Image from 'next/image'
import { Heart, MapPin } from "react-feather";
export default function ProductGrid() {
    return (
        <div className="col-xl-4 col-md-6">
            <div className="service-widget servicecontent">
                <div className="service-img">
                    <Link href="/service-details">
                        <Image
                            className="img-fluid serv-img"
                            alt="Service Image"
                            src={service_04}
                        />
                    </Link>
                    <div className="fav-item">
                        <Link href="/categories">
                            <span className="item-cat">Car Wash</span>
                        </Link>
                        <Link href="#" className="fav-icon">
                            <Heart size={18} />
                        </Link>
                    </div>
                    <div className="item-info">
                        <Link href="/providers">
                            <span className="item-img">
                                <Image
                                    src={avatar_01}
                                    className="avatar"
                                    alt=""
                                />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="service-content">
                    <h3 className="title">
                        <Link href="/products/asdasd">Car Repair Services</Link>
                    </h3>
                    <p>
                        <i className="feather-map-pin" ><MapPin size={18} /></i>
                        Maryland City, USA
                        <span className="rate">
                            <i className="fas fa-star filled" />
                            4.9
                        </span>
                    </p>
                    <div className="serv-info">
                        <h6>$20.00<span className="old-price">$35.00</span></h6>
                        <Link href="/bookings" className="btn btn-book">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}