"use client"
import Link from "next/link";
import StickyBox from "react-sticky-box";
import ProductPriceWidget from "@/components/widgets/ProductPriceWidget";
import InstructionListWidget from "@/components/widgets/InstructionListWidget";
import AdditionalProductsWidget from "@/components/widgets/AdditionalProductsWidget";
import AvailabilityWidget from "@/components/widgets/AvailabilityWidget";
import ProductInterface from "@/interfaces/Products/ProductInterface";
export default function ProductDetailRightSideSection({ product }: { product?: ProductInterface }) {
    return (
        <div className="col-lg-4 theiaStickySidebar">
            <StickyBox>
                <div className="card card-provide mb-0">
                    <div className="card-body">
                        <ProductPriceWidget price={product?.price} currency={product?.currency} />
                        <InstructionListWidget />
                        <AdditionalProductsWidget />
                        <AvailabilityWidget />
                        <Link href={{
                            pathname: '/checkout',
                            query: {
                                'product_id': product?.uuid
                            }
                        }} className="btn btn-primary">
                            Buy now
                        </Link>
                    </div>
                </div>
            </StickyBox>
        </div>
    )
}