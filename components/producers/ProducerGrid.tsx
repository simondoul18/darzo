"use client"
import { provider_11 } from "@/storage/image";
import Image from 'next/image'
import Link from 'next/link';
export default function ProducerGrid() {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="providerset">
                <div className="providerset-img">
                    <Link href="#">
                        <Image src={provider_11} alt="img" />
                    </Link>
                </div>
                <div className="providerset-content">
                    <div className="providerset-price">
                        <div className="providerset-name">
                            <h4>
                                <Link href="#">John Smith</Link>
                                <i className="fa fa-check-circle" aria-hidden="true" />
                            </h4>
                            <span>Electrician</span>
                        </div>
                        <div className="providerset-prices">
                            <h6>
                                $20.00<span>/hr</span>
                            </h6>
                        </div>
                    </div>
                    <div className="provider-rating">
                        <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fa-solid fa-star-half-stroke filled" />
                            <span>(320)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}