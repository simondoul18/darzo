"use client";
import { service_12, avatar_01 } from "@/storage/image";
import Link from "next/link";
import Image from "next/image";

export default function CustomerReview() {
    return (
        <div className="review-list">
            <div className="review-imgs">
                <Link href="#"><Image className="rounded img-fluid" src={service_12} alt="" /></Link>
            </div>
            <div className="review-info">
                <h5>
                    <Link href="#">Building Construction Services.</Link>
                    <span>Good Work</span>
                </h5>
                <div className="review-user">
                    <Image className="avatar rounded-circle" src={avatar_01} alt="" />Jeffrey Akridge,
                    <span className="review-date">July 11, 2022 11:38 am</span>
                </div>
            </div>
            <div className="review-count">
                <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    )
}