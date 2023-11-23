"use client";

import { useEffect, useState } from "react";
import WidgetsHeader from "../WidgetsHeader";
import ProductService from "@/services/fetch/Products/ProductService";
import { AxiosResponse } from "axios";
import ProductPlaceholder from "@/components/products/ProductPlaceholder";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import PaginatedProductsInterface from "@/interfaces/Products/PaginatedProducts";
import ProductInterface from "@/interfaces/Products/ProductInterface";
import Link from "next/link";
import ProductPlaceholderSkeleton from "@/components/skeleton/ProductPlaceholderSkeleton";


export default function FeaturedProductsWidget() {

    let productService = new ProductService;


    let [products, setProducts] = useState<ProductInterface[]>([]);

    useEffect(() => {
        productService.fetchPaginated({ 'include': 'images,currency' }).then((response: AxiosResponse<OriginResponse<PaginatedProductsInterface>>) => {
            setProducts(response.data.data?.data ? response.data.data?.data : []);

        })
    }, []);

    return (
        <section className="pb-4 bg-white">
            <div className="container flex flex-col">
                <div className="row">
                    <WidgetsHeader title="Featured Products" text="What are you looking for?" />
                </div>
                <div className="row">
                    {products.length > 0 && products.map((product, i) => {
                        return (
                            <div className="col-12 col-lg-4 col-md-5" key={i}>
                                <ProductPlaceholder name={product?.name} price={product.price} images={product.images} currency={product?.currency} uuid={product.uuid} />
                            </div>
                        )
                    })}
                </div>
                <div className="mx-auto mt-4">
                    <Link href="/products/all" className="btn btn-primary btn-view">View All</Link>
                </div>
            </div>
        </section>
    )
}