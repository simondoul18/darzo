"use client"
import { undo_icon } from "@/storage/image";
import Image from "next/image";
import Link from "next/link";
import ResetPassword from "@/components/auth/ResetPassword"
export default function ResetPasswordPage() {
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 mx-auto">
                        <div className="login-wrap">
                            <div className="login-back">
                                <Link href="/"><Image src={undo_icon} className="me-2" alt="icon" />Back To Home</Link>
                            </div>
                            <div className="login-header">
                                <h3>Reset Password</h3>
                                <p>Your new password must be different from previous used passwords.</p>
                            </div>
                            {/* Reset Password Form */}
                            <ResetPassword />
                            {/* /Reset Password Form */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}