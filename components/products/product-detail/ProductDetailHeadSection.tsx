"use client";
import Skeleton from 'react-loading-skeleton';
import ProductDetailIconWrapper from './ProductDetailIconWrapper';
import ProductHeadingWrapper from './ProductHeadingWrapper';
export default function ProductDetailHeadSection({ heading, categories, description }: { heading?: string, categories?: any[], description?: string }) {
    return (
        <div className="row">
            <ProductHeadingWrapper heading={heading} categories={categories} />
            {heading && <ProductDetailIconWrapper />}
            {!heading && (
                <div className="">
                    <Skeleton />
                </div>
            )}
        </div>
    )
}