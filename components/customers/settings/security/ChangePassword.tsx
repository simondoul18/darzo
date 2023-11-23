"use client";
import { lock_icon } from "@/storage/image";
import Link from "next/link"
import Image from 'next/image'
export default function ChangePassword() {
    return (
        <>
        <div className="linked-item">
            <div className="linked-wrap">
                <div className="linked-acc">
                    <span className="link-icon">
                        <Image src={lock_icon} alt="" />
                    </span>
                    <div className="linked-info">
                        <h6>Password</h6>
                        <p>Last Changed  <span>22 Sep 2022, 10:30:55 AM</span></p>
                    </div>
                </div>
                <div className="linked-action">
                    <Link href="/change-password" className="btn btn-secondary btn-set">Change Password</Link>
                </div>
            </div>
        </div>
        </>
    )
}