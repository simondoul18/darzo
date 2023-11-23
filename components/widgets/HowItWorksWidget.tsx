"use client";

import { work_1, work_2, work_3 } from "@/storage/image";
import Image from "next/image";
import OfferingsBanner from "../banners/OfferingsBanner";
import WidgetsHeader from "./WidgetsHeader";
import { ArrowRight } from "react-feather";



export default function HowItWorksWidget() {
    return (
        <section className="works-five-section">
            <div className="container">
                <div className="row">
                    <WidgetsHeader title="How it works?" text="What do you need to find?" />
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="works-it-five-button-main">
                            <div className="works-it-five-button">
                                <h4>01</h4>
                            </div>
                            <div className="works-it-dots">
                                <span></span>
                            </div>
                            <div className="works-it-lines">
                                <span></span>
                            </div>
                        </div>
                        <div className="works-five-main !border !border-gray-300 cursor-pointer">
                            <div className="works-five-img">
                                <Image src={work_3} alt="" />
                            </div>
                            <div className="works-five-bottom">
                                <h5>Find Product</h5>
                                <p>Find your desired product from hundreds of different products.</p>
                                <ArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="works-it-five-button-main">
                            <div className="works-it-five-button">
                                <h4>02</h4>
                            </div>
                            <div className="works-it-dots">
                                <span></span>
                            </div>
                            <div className="works-it-lines">
                                <span></span>
                            </div>
                        </div>
                        <div className="works-five-main !border !border-gray-300 cursor-pointer">
                            <div className="works-five-img">
                                <Image src={work_2} alt="" />
                            </div>
                            <div className="works-five-bottom">
                                <h5>Configure and Check</h5>
                                <p>On the product page configure the product according to your needs.</p>
                                <ArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="works-it-five-button-main">
                            <div className="works-it-five-button">
                                <h4>03</h4>
                            </div>
                            <div className="works-it-dots">
                                <span></span>
                            </div>
                        </div>
                        <div className="works-five-main !border !border-gray-300 cursor-pointer">
                            <div className="works-five-img">
                                <Image src={work_1} alt="" />
                            </div>
                            <div className="works-five-bottom">
                                <h5>Secure Payments</h5>
                                <p>Make the payment from our secure payment channel.</p>
                                <ArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
                <OfferingsBanner />
            </div>
        </section>
    )
}