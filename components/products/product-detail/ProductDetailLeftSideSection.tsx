"use client";
import ProductDetailDescription from './ProductDetailDescription'
import ProductDetailAttributes from './ProductDetailAttributes'
import Gallery from './GalleryCarousel'
import ProductDetailVideo from './ProductDetailVideo'
import ProductReviews from '@/components/reviews/ProductReviews'
import RelatedProducts from '../RelatedProducts'
import ProductInterface from '@/interfaces/Products/ProductInterface';
export default function ProductDetailLeftSideSection(props: { product?: ProductInterface }) {
    return (
        <div className="col-lg-8">
            <ProductDetailDescription description={props.product?.description} />
            <ProductDetailAttributes product={props.product} />
            <Gallery images={props.product?.images} />
            <ProductDetailVideo />
            {/* <ProductReviews /> */}
            <RelatedProducts />
        </div>
    )
}