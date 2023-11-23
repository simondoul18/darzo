"use client";
import Link from 'next/link';
import { Download, Heart, Printer, Share2 } from 'react-feather';
export default function ProductDetailIconWrapper() {
    return (
        <div className="col-md-4">
            <div className="serv-action">
                <ul>
                    <li>
                        <Link href="#">
                            <i className="feather-heart" ><Heart size={18} /></i>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" data-bs-toggle="tooltip" title="Share">
                            <i className="feather-share-2" ><Share2 size={18} /></i>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <i className="feather-printer" ><Printer size={18} /></i>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <i className="feather-download" ><Download size={18} /></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}