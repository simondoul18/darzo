"use client";
import { monitor_icon } from "@/storage/image";
import Link from "next/link"
import Image from 'next/image'
export default function DeviceManagement() {
    return (
        <div className="linked-item">
            <div className="linked-wrap">
                <div className="linked-acc">
                    <span className="link-icon">
                        <Image src={monitor_icon} alt="" />
                    </span>
                    <div className="linked-info">
                        <h6>Device Management</h6>
                        <p>Last Changed  <span>22 Sep 2022, 10:30:55 AM</span></p>
                    </div>
                </div>
                <div className="linked-action">
                    <Link href="/provider-device-management" className="btn btn-secondary btn-set">Manage</Link>
                </div>
            </div>
        </div>
    )
}