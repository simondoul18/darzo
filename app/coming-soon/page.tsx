"use client"
import { coming_soon_png, work_bg_03 } from "@/storage/image";
import Image from 'next/image'
import "@/public/vendor/marketplace/assets/css/style.css";
import ReadyToLaunch from "@/components/coming-soon/ReadyToLaunch";
import ComingSoon from "@/components/coming-soon/ComingSoon";
import ComingSoonHeader from "@/components/coming-soon/ComingSoonHeader";
import ComingSoonFooter from "@/components/coming-soon/ComingSoonFooter";
export default function ComoingSoon() {
    return (
        <div>
            <div className="bg-img">
                <Image src={work_bg_03}alt="img" className="bgimg1" />
                <Image src={work_bg_03} alt="img" className="bgimg2" />
            </div>
            <div className="content">
                <div className="container">
                    <ComingSoonHeader />
                    <div className="maintenance-sec">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="maintenance-wrap">							
                                    <ReadyToLaunch />
                                    <ComingSoon />
                                </div>
                            </div>
                            <div className="col-lg-6 text-center">
                                <Image src={coming_soon_png} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <ComingSoonFooter />
                </div>
            </div>
        </div>
    )
}