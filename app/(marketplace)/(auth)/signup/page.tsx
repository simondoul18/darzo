"use client"
import { undo_icon } from "@/storage/image";
import Signup from '@/components/auth/Signup'
import Link from 'next/link'
import Image from 'next/image'
export default function SignupPage() {
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
                                <h3>User Signup</h3>
                            </div>
                            <Signup />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}