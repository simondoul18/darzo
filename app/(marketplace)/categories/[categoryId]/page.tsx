"use client";

import ProductsWrapper from "@/components/products/ProductsWrapper";
import { useState } from "react";

export default function CategoryContentPage({ params }: { params: { categoryId: string } }) {

    let [categoryId, setCategoryId] = useState<string | null>(null);
    return (
        <ProductsWrapper categoryIds={[params.categoryId]} />
    )
}