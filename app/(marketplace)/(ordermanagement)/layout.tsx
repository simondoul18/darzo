"use client"
import { feature_bg_03, work_bg_03 } from "@/storage/image";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "react-feather";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="bg-img">
                <Image src={work_bg_03} alt="img" className="bgimg1" />
                <Image src={work_bg_03} alt="img" className="bgimg2" />
                <Image src={feature_bg_03} alt="img" className="bgimg3" />
            </div>
            <div className="content book-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="login-back">
                                <Link href="/service-details">
                                    <ArrowLeft /> Back
                                </Link>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
