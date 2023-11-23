"use client";
import { user_edit } from "@/storage/image";
import Link from "next/link"
import Image from 'next/image'
export default function AccountActivity() {
    return (
        <div className="linked-item">
            <div className="linked-wrap">
                <div className="linked-acc">
                    <span className="link-icon">
                        <Image src={user_edit} alt="" />
                    </span>
                    <div className="linked-info">
                        <h6>Account Activity</h6>
                        <p>Last login  <span>22 Sep 2022, 10:21:55 AM</span></p>
                    </div>
                </div>
                <div className="linked-action">
                    <Link href="provider-login-activity.html" className="btn btn-secondary btn-set">View All</Link>
                </div>
            </div>
        </div>
    )
}