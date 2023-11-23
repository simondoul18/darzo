"use client";
import ProductsWrapper from "@/components/products/ProductsWrapper";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ProductPage({ params }: { params: { search: string } }) {
    let query = useSearchParams();

    return (
        <ProductsWrapper search={query.has('search') ? query.get('search') : ''} />
    )
}