"use client";
import Link from 'next/link';
import Image from "next/image";
import { gallery_01, gallery_02, gallery_03 } from "@/storage/image";
import dynamic from "next/dynamic";
import ProductImageInterface from '@/interfaces/Products/ProductImageInterface';
import Skeleton from 'react-loading-skeleton';


const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});


export default function GalleryCarousel(props: { images?: ProductImageInterface[] }) {
    var settings = {
        // autoWidth: true,
        items: 12,
        margin: 25,
        dots: true,
        nav: true,
        navText: [
            '<i class="fa-solid fa-angle-left"></i>',
            '<i class="fa-solid fa-angle-right"></i>',
        ],

        loop: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 4,
            },
            768: {
                items: 6,
            },
            1170: {
                items: 6,
            },
        },
    };
    return (
        <div className="service-wrap mt-4">
            <div className="row">
                <div className="col-md-6">
                    <h5>Gallery</h5>
                </div>
                <div className="col-md-6 text-md-end">
                    <div className="owl-nav mynav3" />
                </div>
            </div>
            <div className="serviceDetails">
                {props.images && <OwlCarousel {...settings} className="owl-carousel gallery-slider">
                    {props.images && props.images.map((image, i) => {
                        return (
                            <div className="gallery-widget" key={i}>
                                <Image
                                    className="img-fluid"
                                    alt="product image"
                                    src={image?.url}
                                    width={300}
                                    height={300}
                                />
                            </div>
                        )
                    })}
                </OwlCarousel>}

                {!props.images && <Skeleton className='h-[60px]' />}
            </div>
        </div>
    )
}