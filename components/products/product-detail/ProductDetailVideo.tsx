"use client";
import Link from "next/link";
export default function ProductDetailVideo() {
    return (
        <div className="service-wrap">
            <h5>Video</h5>
            <div id="background-video">
                <Link
                    className="play-btn"
                    data-fancybox=""
                    href="https://www.youtube.com/watch?v=Vdp6x7Bibtk"
                >
                    <i className="fa-solid fa-play" />
                </Link>
            </div>
        </div>
    )
}