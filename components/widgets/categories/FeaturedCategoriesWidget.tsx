"use client"
import Image from "next/image";
import { car_category_five } from "@/storage/image";
import StatsWidget from "../StatsWidget";
import CategoriesPlaceholder from "../../categories/CategoriesPlaceholder";
import WidgetsHeader from "../WidgetsHeader";
import { useEffect, useState } from "react";
import CategoryService from "@/services/fetch/Categories/CategoryService";
import { AxiosResponse } from "axios";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import CategoryInterface from "@/interfaces/Categories/CategoryInterface";
import Skeleton from "react-loading-skeleton";
import { useRouter } from "next/navigation";

export default function FeaturedCategoriesWidget() {

    useEffect(() => {
        fetchCategories();
    }, []);

    let [categories, setCategories] = useState<CategoryInterface[] | undefined>([]);

    let router = useRouter();

    function fetchCategories() {
        let categoriesService = new CategoryService;

        categoriesService.categories().then((response: AxiosResponse<OriginResponse<CategoryInterface[]>>) => {
            setCategories(response.data.data);
        })
    }

    function navigateToProductFilterPage(i: any) {
        if (categories && categories.length > 0) {
            router.push('/categories/' + categories[i]?.uuid);
        }
    }

    return (
        <section className="featured-categories-section">
            <div className="featured-category-bg-img">
                <Image src={car_category_five} alt="" />
            </div>
            <div className="container">
                <StatsWidget />

                <WidgetsHeader title="Featured Categories" text="What do you need to find?" />

                <div className="row gap-y-6">
                    {categories && categories.length > 0 ? categories.map((category: CategoryInterface, i: any) => {
                        return (
                            (
                                <div className="col-lg-3 col-md-4 col-12" key={i}>
                                    <CategoriesPlaceholder name={category.name} onClick={() => navigateToProductFilterPage(i)} />
                                </div>
                            )
                        )
                    }) : (
                        <>
                            <div className="col-lg-4 col-md-6 col-12">
                                <Skeleton className="h-14 rounded border shadow-md" />
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <Skeleton className="h-14 rounded border shadow-md" />
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <Skeleton className="h-14 rounded border shadow-md" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}