"use client";

import { car_wash_header1, car_wash_header2 } from "@/storage/image";
import Image from "next/image";



export default function WidgetsHeader(props: {
    title: string,
    text: string
}) {
    return (
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="section-heading car-wash-heading car-wash-feature aos" data-aos="fade-up">
                    <div className="car-wash-img-five">
                        <Image src={car_wash_header1} alt="" className="car-wash-header-one" />
                        <h2>{props.title}</h2>
                        <Image src={car_wash_header2} alt="" className="car-wash-header-two" />
                    </div>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    )
}