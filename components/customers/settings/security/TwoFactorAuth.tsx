"use client";
import { scan_icon } from "@/storage/image";
import Link from "next/link"
import Image from 'next/image'
export default function TwoFactorAuth() {
    return (
        <div className="linked-item">
            <div className="linked-wrap">
                <div className="linked-acc">
                    <span className="link-icon">
                        <Image src={scan_icon} alt="" />
                    </span>
                    <div className="linked-info">
                        <h6>Two Factor Authendication <span className="badge badge-success">Enable</span></h6>
                        <p>Lorem ipsum dolor sit amet, consectetur </p>
                    </div>
                </div>
                <div className="linked-action">
                    <Link href="#" className="btn btn-secondary btn-set">Disable</Link>
                </div>
            </div>
        </div>
    )
}