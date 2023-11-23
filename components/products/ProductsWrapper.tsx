"use client";

import Pagination from "../common/Pagination";
import ProductSorting from "./filters/ProductSorting";
import ProductFilters from "./filters/ProductFilters";
import ProductsListing from "./filters/ProductsListing";
import { useEffect, useState } from "react";
import ProductService from "@/services/fetch/Products/ProductService";
import { AxiosResponse } from "axios";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import PaginatedProductsInterface from "@/interfaces/Products/PaginatedProducts";
import ProductInterface from "@/interfaces/Products/ProductInterface";
import CategoryService from "@/services/fetch/Categories/CategoryService";
import CategoryInterface from "@/interfaces/Categories/CategoryInterface";

interface ProductFilterOptions { categories: string[], search: string, minPrice: number, maxPrice: number, rating: number, initialSet: boolean };

export default function ProductsWrapper({ categoryIds, search }: { categoryIds?: string[], search?: string | null }) {

    let initialFilterOptions: ProductFilterOptions = {
        categories: [],
        search: '',
        minPrice: 0,
        maxPrice: 0,
        rating: 1,
        initialSet: true
    };
    let [products, setProduct] = useState<ProductInterface[] | undefined>();
    let [categories, setCategories] = useState<CategoryInterface[] | undefined>();
    let [filterOptions, setFilterOptions] = useState<ProductFilterOptions>(initialFilterOptions);

    useEffect(() => {
        if (!filterOptions.initialSet) {
            setProduct(undefined);
            fetchFilteredProducts();
        }
    }, [filterOptions]);

    useEffect(() => {
        if (categoryIds) {
            setFilterOptions((prevState) => {
                return {
                    ...prevState,
                    categories: categoryIds,
                    initialSet: false
                };
            });
        }

        if (search) {
            setFilterOptions((prevState) => {
                return {
                    ...prevState,
                    search: search
                };
            });
        }

        setFilterOptions((prevState) => {
            return {
                ...prevState,
                initialSet: false
            };
        });
    }, [categoryIds, search]);

    useEffect(() => {
        fetchCategories();
    }, [])

    function fetchFilteredProducts() {
        let productService = new ProductService;
        productService.fetchPaginated({
            include: "categories,tags,currency,images",
            filter: `categories:${filterOptions.categories.join()};search:${filterOptions.search};price_range:${filterOptions.minPrice},${filterOptions.maxPrice}`,
        }).then((response: AxiosResponse<OriginResponse<PaginatedProductsInterface>>) => {
            setProduct(response.data?.data?.data);
        });
    }

    function fetchCategories() {
        let categoryService = new CategoryService;
        categoryService.categories().then((response: AxiosResponse<OriginResponse<CategoryInterface[]>>) => {
            setCategories(response?.data?.data);
        })
    }

    function categoryChangeHandler(uuid: string) {
        //Check if the value exists in FilterOptions
        let selectedCategories = filterOptions.categories;
        if (filterOptions.categories.indexOf(uuid) < 0) {
            selectedCategories.push(uuid);
        } else {
            let categoryIndex = selectedCategories.indexOf(uuid);
            delete selectedCategories[categoryIndex];
        }

        setFilterOptions((prevState) => {
            return {
                ...prevState,
                categories: selectedCategories
            }
        });
    }

    function resetFilters() {
        setFilterOptions((prevState) => {
            return {
                ...prevState,
                ...initialFilterOptions,
                initialSet: false
            };
        });
    }

    function searchFilterChangeHandler(e: any) {
        if (e.key === "Enter") {
            setFilterOptions((prevState) => {
                return {
                    ...prevState,
                    search: e.target.value
                }
            })
        }
    }


    function priceRangeChangeHandler(min: number, max: number) {
        setFilterOptions((prevState) => {
            return {
                ...prevState,
                minPrice: min,
                maxPrice: max
            }
        })
    }


    return (
        <div className="content">
            <div className="container">
                <div className="row h-full relative">
                    <div className="col-12 col-md-3">
                        <ProductFilters categories={categories} categoryChangeHandler={categoryChangeHandler} filterOptions={filterOptions} resetFilters={resetFilters} searchChangeHandler={searchFilterChangeHandler} priceChangeHandler={priceRangeChangeHandler} />
                    </div>
                    <div className="col-lg-9 col-sm-12">
                        <ProductSorting totalProductsFound={products?.length} />
                        <ProductsListing products={products} />
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
}