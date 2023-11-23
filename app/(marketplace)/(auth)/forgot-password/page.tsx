"use client"
import { undo_icon } from "@/storage/image";
import Image from "next/image";
import Link from "next/link";
import ForgotPassword from "@/components/auth/ForgotPassword"
export default function ForgotPasswordPage() {
    return (
        <div className="content">
                <div className="container">
                    <div className="row">
                        {/* Password Recovery */}
                        <div className="col-md-6 col-lg-6 mx-auto">
                            <div className="login-wrap">
                                <div className="login-back">
                                    <Link href="/login"><Image src={undo_icon} className="me-2" alt="icon" />Back To Login</Link>
                                </div>
                                <div className="login-header">
                                    <h3>Password Recovery</h3>
                                    <p>Enter your email and we will send you a link to reset your password.</p>
                                </div>
                                <ForgotPassword />
                            </div>
                        </div>
                        {/* /Password Recovery */}
                    </div>
                </div>
            </div>
    )
}