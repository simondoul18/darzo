"use client";
import { error_404, feature_bg_03, logo, work_bg_03 } from "@/storage/image";
import Image from "next/image";
import Link from 'next/link';
import "@/public/vendor/marketplace/assets/css/style.css";
import "@/app/global-plugins.css";
import { ArrowLeftCircle } from "react-feather";

export default function NotFound() {
    return (
        <div className="main-wrapper error-page">
            <div className="bg-img">
                <Image src={work_bg_03} alt="img" className="bgimg1" />
                <Image src={work_bg_03} alt="img" className="bgimg2" />
                <Image src={feature_bg_03} alt="img" className="bgimg3" />
            </div>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="error-wrap text-center">
                                <div className="error-logo">
                                    <Link href="/home"><Image className="img-fluid" src={logo} alt="img" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <div className="error-wrap">
                                <div className="error-img">
                                    <Image className="img-fluid" src={error_404} alt="img" />
                                </div>
                                <h2>404 Oops! Page Not Found</h2>
                                <p>This page doesn't exist or was removed! We suggest you back to home.</p>
                                <Link href="/home" className="btn btn-primary"><ArrowLeftCircle size={18} /> Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}