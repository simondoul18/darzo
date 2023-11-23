"use client";
import { google } from "@/storage/image";
import Link from 'next/link'
import Image from 'next/image'
export default function ConnectedApps() {
    return (
        <div className="linked-item">
            <div className="row">
                <div className="col-md-8">
                    <div className="linked-acc">
                        <span className="link-icon">
                            <Image src={google} alt="" />
                        </span>
                        <div className="linked-info">
                            <h6>Google Calendar</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-md-end">
                    <div className="d-flex align-items-center justify-content-md-end">
                        <Link href="#" className="btn-gconnect">Connect</Link>
                        <div className="status-toggle status-tog d-inline-flex justify-content-between align-items-center">
                            <input type="checkbox" id="status_1" className="check" defaultChecked />
                            <label htmlFor="status_1" className="checktoggle">checkbox</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}