"use client";
import Link from 'next/link'
export default function ComingSoonFooter() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="coming-back">
                    <p>We'll Be Back Shortly</p>
                    <div className="social-icon media-icon">
                        <ul>
                            <li>
                                <Link href="#" target="_blank"><i className="fa-brands fa-facebook-f" /> </Link>
                            </li>
                            <li>
                                <Link href="#" target="_blank"><i className="fa-brands fa-twitter" /></Link>
                            </li>
                            <li>
                                <Link href="#" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link>
                            </li>
                            <li>
                                <Link href="#" target="_blank"><i className="fa-brands fa-google" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}