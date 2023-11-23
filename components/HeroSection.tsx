"use client"
import Image from "next/image"
import { hero_five_audi } from "../storage/image";
export default function HeroSection() {
    return (
        <div className="home-banner home-banner-three position-relative">
            <div className="row align-items-center w-100">
                <div className="col-lg-6 col-md-12 mx-auto">
                    <div className="section-search section-section-five">
                        <h1 className="!font-extrabold !font-serif">The First Innovative <br /> <span>Home</span> and <span>Living</span> Marketplace</h1>
                        <h4>Search From Millions Awesome Verified Products!</h4>
                        <p>
                            We value your time and therefore washing your car at our car
                            wash will take no more than 15 minutes.

                            We care about time and money, we are making a global place for the producers and customers to go in hand to hand and save time.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="floating-img z-10 w-8/12 h-100">
                    </div>
                </div>
            </div>
        </div>
    )
}