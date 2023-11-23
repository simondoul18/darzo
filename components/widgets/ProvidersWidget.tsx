"use client";

import { car_provider_bg, car_wash_header1, car_wash_header2, provider_01, provider_02, provider_03, provider_04, provider_05 } from "@/storage/image";
import Image from "next/image";
import OwlCarousel from 'react-owl-carousel';

export default function ProvidersWidget() {
    return (
        <section className="providers-section-five">
            <div className="providers-five-bg-car">
                <Image src={car_provider_bg} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-heading car-wash-heading aos" data-aos="fade-up">
                            <div className="car-wash-img-five">
                                <Image src={car_wash_header1} alt="" className="car-wash-header-one" />
                                <h2>Top Providers</h2>
                                <Image src={car_wash_header2} alt="" className="car-wash-header-two" />
                            </div>
                            <p>Meet Our Experts</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel className="owl-carousel top-providers-five owl-theme" loop margin={10} nav>
                            <div className="providerset item">
                                <div className="providerset-img">
                                    <a href="provider-details.html">
                                        <Image src={provider_01} alt="img" />
                                    </a>
                                </div>
                                <div className="providerset-content">
                                    <h4><a href="provider-details.html">John Smith</a><i className="fa fa-check-circle"
                                        aria-hidden="true"></i></h4>
                                    <h5>Electrician</h5>
                                    <div className="providerset-prices">
                                        <h6>$20.00<span>/hr</span></h6>
                                    </div>
                                    <div className="provider-rating">
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fa-solid fa-star-half-stroke filled"></i><span>(320)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="providerset item">
                                <div className="providerset-img">
                                    <a href="provider-details.html">
                                        <Image src={provider_02} alt="img" />
                                    </a>
                                </div>
                                <div className="providerset-content">
                                    <h4><a href="provider-details.html">John Smith</a><i className="fa fa-check-circle"
                                        aria-hidden="true"></i></h4>
                                    <h5>Electrician</h5>
                                    <div className="providerset-prices">
                                        <h6>$20.00<span>/hr</span></h6>
                                    </div>
                                    <div className="provider-rating">
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fa-solid fa-star-half-stroke filled"></i><span>(320)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="providerset item">
                                <div className="providerset-img">
                                    <a href="provider-details.html">
                                        <Image src={provider_03} alt="img" />
                                    </a>
                                </div>
                                <div className="providerset-content">
                                    <h4><a href="provider-details.html">John Smith</a><i className="fa fa-check-circle"
                                        aria-hidden="true"></i></h4>
                                    <h5>Electrician</h5>
                                    <div className="providerset-prices">
                                        <h6>$20.00<span>/hr</span></h6>
                                    </div>
                                    <div className="provider-rating">
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fa-solid fa-star-half-stroke filled"></i><span>(320)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="providerset item">
                                <div className="providerset-img">
                                    <a href="provider-details.html">
                                        <Image src={provider_04} alt="img" />
                                    </a>
                                </div>
                                <div className="providerset-content">
                                    <h4><a href="provider-details.html">John Smith</a><i className="fa fa-check-circle"
                                        aria-hidden="true"></i></h4>
                                    <h5>Electrician</h5>
                                    <div className="providerset-prices">
                                        <h6>$20.00<span>/hr</span></h6>
                                    </div>
                                    <div className="provider-rating">
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fa-solid fa-star-half-stroke filled"></i><span>(320)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="providerset item">
                                <div className="providerset-img">
                                    <a href="provider-details.html">
                                        <Image src={provider_05} alt="img" />
                                    </a>
                                </div>
                                <div className="providerset-content">
                                    <h4><a href="provider-details.html">John Smith</a><i className="fa fa-check-circle"
                                        aria-hidden="true"></i></h4>
                                    <h5>Electrician</h5>
                                    <div className="providerset-prices">
                                        <h6>$20.00<span>/hr</span></h6>
                                    </div>
                                    <div className="provider-rating">
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fa-solid fa-star-half-stroke filled"></i><span>(320)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}