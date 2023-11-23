"use client"
import HeadSection from "@/components/products/product-detail/ProductDetailHeadSection";
import ProductDetailBanner from "@/components/products/product-detail/ProductDetailBanner";
import ProductDetailLeftSideSection from "@/components/products/product-detail/ProductDetailLeftSideSection";
import ProductDetailRightSideSection from "@/components/products/product-detail/ProductDetailRightSideSection";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useEffect, useState } from "react";
import ProductService from "@/services/fetch/Products/ProductService";
import { useParams } from "next/navigation";
import { AxiosResponse } from "axios";
import ProductInterface from "@/interfaces/Products/ProductInterface";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
export default function ProductDetails({ params }: { params: { slug: string } }) {

    let [product, setProduct] = useState<ProductInterface>();
    let productService = new ProductService;
    const query = useParams();

    useEffect(() => {
        fetchProduct(params.slug);
    }, []);

    function fetchProduct(param: string) {
        productService.fetch(param, { 'include': 'categories,attributes,currency,custom_attributes,tags,images' }).then((response: AxiosResponse<OriginResponse<ProductInterface>>) => {
            setProduct(response.data.data);

        })
    }

    return (
        <div className="content">
            <div className="container">
                <HeadSection heading={product?.name} categories={product?.categories} description={product?.description} />
                <ProductDetailBanner images={product?.images} />
                <div className="row">
                    <ProductDetailLeftSideSection product={product} />
                    <ProductDetailRightSideSection product={product} />
                </div>
            </div>
        </div>
    )
}