"use client"
import { bubble_offering_section, offering_worker } from "@/storage/image"
import Image from "next/image"

export default function OfferingsBanner() {
    return (
        <div className="offering-five-all">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <div className="offering-five-main">
                        <h2>We Are Offering 14 Days Free Trial</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore minim veniam, quis nostrud exercitation ullamco magna aliqua. </p>
                        <div className="offering-five-button">
                            <a href="" className="btn btn-primary">Try 14 Days Free Trial<i className="feather-arrow-right-circle"></i> </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="offering-five-img">
                        <Image src={offering_worker} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}