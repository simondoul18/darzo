"use client"
import { avatar_02, service_06 } from "@/storage/image";
import Link from "next/link"
import Image from 'next/image'
import { MapPin } from "react-feather";
export default function OrderGridItem() {
    return (
        <div className="col-xl-4 col-md-6">
            <div className="service-widget servicecontent">
                <div className="service-img">
                    <Link href="#">
                        <Image className="img-fluid serv-img" alt="Service Image" src={service_06} />
                    </Link>
                    <div className="fav-item">
                        <Link href="#"><span className="item-cat">Computer</span></Link>
                    </div>
                    <div className="item-info">
                        <Link href="#"><span className="item-img"><Image src={avatar_02} className="avatar" alt="" /></span></Link>
                    </div>
                </div>
                <div className="service-content">
                    <h3 className="title">
                        <Link href="#">Computer &amp; Server AMC Service</Link>
                    </h3>
                    <p><i className="feather-map-pin" ><MapPin size={18} /></i> California, USA<span className="rate"><i className="fas fa-star filled" />4.9</span></p>
                    <div className="serv-info">
                        <h6>$20.00<span className="old-price">$35.00</span></h6>
                        <Link href="#" className="btn btn-book">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}