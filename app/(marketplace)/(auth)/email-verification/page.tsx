"use client"
import { undo_icon, email_otp } from "@/storage/image";
import Image from "next/image";
import Link from "next/link";
import EmailVerification from "@/components/auth/EmailVerification";
export default function EmailVerificationPage() {
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 mx-auto">
                        <div className="login-wrap otp-wrap">
                            <div className="login-back">
                                <Link href="/"> <Image src={undo_icon} className="me-2" alt="icon" />Back To Home</Link>
                            </div>
                            <div className="otp-img">
                                <Image src={email_otp} alt="" />
                            </div>
                            <div className="login-header">
                                <h3>Email OTP Verification</h3>
                                <p>OTP sent to your Email Address ending <span>******doe@example.com</span></p>
                            </div>
                            <EmailVerification />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}