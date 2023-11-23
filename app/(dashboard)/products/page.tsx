"use client";

import BackNavigation from "@/components/global/BackNavigation/BackNavigation";
import ButtonMain from "@/components/global/buttons/ButtonMain";
import ProductsTable from "@/components/products/Table/ProductsTable";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Plus } from "react-feather";


export default function ProductsPage() {


    let [showLoaderForAddNewProductButton, setShowLoaderForAddNewProductButton] = useState<boolean>(false);

    let router = useRouter();

    function navigateToAddProductPage() {
        setShowLoaderForAddNewProductButton(true);
        router.push('/products/designer');
    }


    return (
        <div className="container flex flex-col">
            <div className="flex">
                <BackNavigation title="Products" backText="Go back" />

                <div className="my-auto ml-auto">
                    <ButtonMain scheme="btn-primary" click={navigateToAddProductPage} showLoaderOnRequest={showLoaderForAddNewProductButton}>
                        <div className="flex gap-1">
                            <Plus size={20} className="my-auto" />
                            <div className="">Add new product</div>
                        </div>
                    </ButtonMain>
                </div>
            </div>

            <div className="mt-12">
                <ProductsTable />
            </div>
        </div>
    )
}