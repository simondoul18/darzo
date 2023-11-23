"use client";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import dynamic from "next/dynamic";
import ProductImageInterface from '@/interfaces/Products/ProductImageInterface';
import ImageViewer from 'react-simple-image-viewer';
import { useEffect, useState } from "react";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

export default function ProductDetailBanner({ images }: { images?: ProductImageInterface[] }) {
    let settings = {
        // autoWidth: true,
        items: 18,
        margin: 25,
        dots: true,
        nav: true,
        loop: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 4,
            },
            768: {
                items: 8,
            },
            1170: {
                items: 12,
            },
        },
    };

    let [currentImage, setCurrentImage] = useState<string | null>(images && images.length > 0 ? images[0].url : null);
    const [currentViewerImage, setCurrentViewerImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    let [imageSrc, setImageSrc] = useState<any>([]);

    useEffect(() => {
        setCurrentImage(images && images.length > 0 ? images[0].url : null);
        setImageSrc(images && images.length > 0 ? images?.map(image => { return image.url }) : []);
    }, [images]);

    function changeImage(index: number) {
        if (images && images.length > 0) {
            setCurrentImage(images[index].url);
            setCurrentViewerImage(index);
        }
    }

    function viewImage() {
        setIsViewerOpen(true);
    }

    function closeImageViewer() {
        setIsViewerOpen(false);
    }


    return (
        <div className="row">
            <div className="col-md-12">
                <div className="service-gal">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="service-images big-gallery flex justify-center items-center">
                                {currentImage && <Image
                                    src={currentImage}
                                    alt="Product Landing image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{
                                        objectFit: 'contain',
                                        height: '600px',
                                        width: 'auto',
                                    }}
                                    onClick={() => viewImage()}
                                />}
                            </div>
                            {!currentImage && <Skeleton className="h-[500px]" />}
                        </div>
                    </div>

                    {imageSrc && imageSrc.length > 0 && isViewerOpen && <ImageViewer
                        src={imageSrc}
                        currentIndex={currentViewerImage}
                        onClose={closeImageViewer}
                        disableScroll={false}
                        backgroundStyle={{
                            backgroundColor: "rgba(0,0,0,0.9)",
                            zIndex: '99999'
                        }}
                        closeOnClickOutside={true}
                    />}

                    <div className="row">
                        <div className="col-12">
                            {images && <OwlCarousel {...settings} className="owl-carousel gallery-slider cursor-pointer">
                                {images && images.map((image, i) => {
                                    return (
                                        <div className="cursor-pointer" key={i} onClick={() => changeImage(i)}>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}