"use client";

import { app_sec_five, apple_five, googleplay, googleplay_five, scan_img } from "@/storage/image";
import Image from "next/image";

export default function AppDownloadOfferingWidget() {
    return (
        <section className="app-five-section">
            <div className="container">
                <div className="app-sec app-sec-five">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="col-md-12">
                                <div className="heading aos" data-aos="fade-up">
                                    <h2>Download Our App</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                    <h6>Scan the QR code to get the app now</h6>

                                </div>
                            </div>
                            <div className="downlaod-btn aos" data-aos="fade-up">
                                <div className="scan-img">
                                    <Image src={scan_img} className="img-fluid" alt="img" />
                                </div>
                                <a href="#" target="_blank">
                                    <Image src={googleplay_five} alt="img" />
                                </a>
                                <a href="#" target="_blank">
                                    <Image src={apple_five} alt="img" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="appimg-set aos" data-aos="fade-up">
                                <Image src={app_sec_five} className="img-fluid" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}