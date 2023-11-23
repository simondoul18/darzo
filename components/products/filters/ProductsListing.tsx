"use client";
import ProductGrid from "@/components/products/ProductGrid";
import ProductInterface from "@/interfaces/Products/ProductInterface";
import ProductPlaceholder from "../ProductPlaceholder";
import ProductPlaceholderSkeleton from "@/components/skeleton/ProductPlaceholderSkeleton";
export default function ProductsListing({ products }: { products?: ProductInterface[] }) {
    const n = 7;
    return (
        <div className={`row h-full w-full ${!products ? 'gap-y-6' : ''}`}>
            {
                products ? products.map((product: ProductInterface, i: any) => {
                    return (
                        <div className="col-12 col-lg-4 col-md-6" key={i}>
                            <ProductPlaceholder name={product.name} price={product.price} images={product.images} currency={product.currency} uuid={product.uuid} />
                        </div>
                    )
                }) : [...Array(6)].map((num, i) => {
                    return (
                        <div className="col-12 col-lg-4 col-md-6" key={i}>
                            <ProductPlaceholderSkeleton />
                        </div>
                    )
                })
            }

            {
                products && products.length == 0 ? (
                    <div className="flex">
                        <div className="mx-auto mt-40 text-2xl font-semibold">No products found.</div>
                    </div>
                ) : ''
            }
        </div>
    )
}