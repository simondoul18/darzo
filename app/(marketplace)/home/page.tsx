"use client";
import HeroSection from "@/components/HeroSection";
import AppDownloadOfferingWidget from "@/components/banners/AppDownloadOfferingWidget";
import HowItWorksWidget from "@/components/widgets/HowItWorksWidget";
import FeaturedCategoriesWidget from "@/components/widgets/categories/FeaturedCategoriesWidget";
import FeaturedProductsWidget from "@/components/widgets/products/FeaturedProductsWidget";


export default function Home() {
    return (
        <div className="main-wrapper">
            <div className="container">
                <HeroSection />
            </div>

            <FeaturedCategoriesWidget />
            <FeaturedProductsWidget />
            <HowItWorksWidget />
            <FeaturedProductsWidget />
            <AppDownloadOfferingWidget />
        </div>
    )
}