"use client";
import { avatar_02, avatar_03, avatar_04, service_01, service_02, service_03 } from "@/storage/image";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Heart, MapPin } from "react-feather";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

export default function RelatedProducts() {
    var settingss = {
        // autoWidth: true,
        items: 2,
        margin: 25,
        dots: false,
        nav: true,
        navText: [
            '<i class="fa-solid fa-angle-left"></i>',
            '<i class="fa-solid fa-angle-right"></i>',
        ],

        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 2,
            },
        },
    };
    return (
        <>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="service-wrap">
                        <h5>Related Services</h5>
                    </div>
                </div>
                <div className="col-md-6 text-md-end">
                    <div className="owl-nav mynav" />
                </div>
            </div>
            <div className="serviceDetails">
                <OwlCarousel {...settingss} className="owl-carousel related-slider ">
                    <div className="service-widget mb-0">
                        <div className="service-img">
                            <Link href="#">
                                <Image
                                    className="img-fluid serv-img"
                                    alt="Service Image"
                                    src={service_01}
                                />
                            </Link>
                            <div className="fav-item">
                                <Link href="#">
                                    <span className="item-cat">Cleaning</span>
                                </Link>
                                <Link href="#" className="fav-icon">
                                    <i className="feather-heart" ><Heart size={18} /></i>
                                </Link>
                            </div>
                            <div className="item-info">
                                <Link href="providers">
                                    <span className="item-img">
                                        <Image
                                            src={avatar_04}
                                            className="avatar"
                                            alt=""
                                        />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="service-content">
                            <h3 className="title">
                                <Link href="service-details">
                                    Electric Panel Repairing Service
                                </Link>
                            </h3>
                            <p>
                                <i className="feather-map-pin" ><MapPin size={18} /></i>
                                Montana, USA
                                <span className="rate">
                                    <i className="fas fa-star filled" />
                                    4.9
                                </span>
                            </p>
                            <div className="serv-info">
                                <h6>
                                    $25.00<span className="old-price">$35.00</span>
                                </h6>
                                <Link href="booking" className="btn btn-book">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="service-widget mb-0">
                        <div className="service-img">
                            <Link href="service-details">
                                <Image
                                    className="img-fluid serv-img"
                                    alt="Service Image"
                                    src={service_02}
                                />
                            </Link>
                            <div className="fav-item">
                                <Link href="categories">
                                    <span className="item-cat">Construction</span>
                                </Link>
                                <Link href="#;" className="fav-icon">
                                    <i className="feather-heart" ><Heart size={18} /></i>
                                </Link>
                            </div>
                            <div className="item-info">
                                <Link href="providers">
                                    <span className="item-img">
                                        <Image
                                            src={avatar_03}
                                            className="avatar"
                                            alt=""
                                        />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="service-content">
                            <h3 className="title">
                                <Link href="service-details">
                                    Toughened Glass Fitting Services
                                </Link>
                            </h3>
                            <p>
                                <i className="feather-map-pin" ><MapPin size={18} /></i>
                                Montana, USA
                            </p>
                            <div className="serv-info">
                                <h6>$45.00</h6>
                                <Link href="booking" className="btn btn-book">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="service-widget mb-0">
                        <div className="service-img">
                            <Link href="service-details">
                                <Image
                                    className="img-fluid serv-img"
                                    alt="Service Image"
                                    src={service_03}
                                />
                            </Link>
                            <div className="fav-item">
                                <Link href="categories">
                                    <span className="item-cat">Carpentry</span>
                                </Link>
                                <Link href="#;" className="fav-icon">
                                    <i className="feather-heart" ><Heart size={18} /></i>
                                </Link>
                            </div>
                            <div className="item-info">
                                <Link href="providers">
                                    <span className="item-img">
                                        <Image
                                            src={avatar_02}
                                            className="avatar"
                                            alt=""
                                        />
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="service-content">
                            <h3 className="title">
                                <Link href="service-details">Wooden Carpentry Work</Link>
                            </h3>
                            <p>
                                <i className="feather-map-pin" ><MapPin size={18} /></i>
                                Montana, USA
                            </p>
                            <div className="serv-info">
                                <h6>$45.00</h6>
                                <Link href="booking" className="btn btn-book">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </OwlCarousel >
            </div>
        </>
    )
}