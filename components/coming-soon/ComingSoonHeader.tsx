"use client";
import Link from 'next/link'
import Image from 'next/image'
import { logo } from "@/storage/image";
export default function ComingSoonHeader() {
    return (
        <div className="row">
            <div className="col-lg-12">						
                <div className="error-wrap text-center">
                    <div className="error-logo mb-0">
                        <Link href="/"><Image className="img-fluid" src={logo} alt="img" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}