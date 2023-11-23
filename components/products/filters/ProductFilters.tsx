"use client";
import { useEffect, useState } from 'react';
import Link from "next/link";
import { Box } from "@mui/material";
import { ChevronDown, ChevronUp, Star } from 'react-feather';
import CategoryInterface from '@/interfaces/Categories/CategoryInterface';
import Skeleton from 'react-loading-skeleton';
import CheckboxMain from '@/components/global/inputs/CheckboxMain';
import InputMain from '@/components/global/inputs/InputMain';
import ButtonMain from '@/components/global/buttons/ButtonMain';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function ProductFilters({ categories, categoryChangeHandler, filterOptions, resetFilters, searchChangeHandler, priceChangeHandler }: { categories?: CategoryInterface[], categoryChangeHandler?: any, filterOptions?: any, resetFilters?: any, searchChangeHandler?: any, priceChangeHandler?: any }) {
    useEffect(() => {
        if (!filterOptions.minPrice) {
            setValue('min', null);
        }
        if (!filterOptions.maxPrice) {
            setValue('max', null);
        }
        setSearch(filterOptions.search)
    }, [filterOptions]);

    let [search, setSearch] = useState<string>('');

    const priceRangeForm: any = Yup.object().shape({
        min: Yup.number().nullable(),
        max: Yup.number().nullable(),
    });

    const loginParams = { resolver: yupResolver(priceRangeForm) };
    const { register, handleSubmit, formState, setValue } = useForm(loginParams);
    const { errors } = formState;

    let [totalCategoriesVisible, setTotalCategoriesVisible] = useState<number>(6);
    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 200,
            label: '250',
        },
        {
            value: 370,
            label: '500',
        },
        {
            value: 500,
            label: '1000',
        }
    ];

    function showAllCategories() {
        if (categories) {
            if (categories.length == totalCategoriesVisible) {
                setTotalCategoriesVisible(6);
            } else {
                setTotalCategoriesVisible(categories.length);
            }
        }
    }

    function priceRangeHandler(e: any) {
        priceChangeHandler(e.min, e.max);
    }

    return (
        <div className="filter-div sticky top-32">
            <div className="filter-head">
                <h5>Filter by</h5>
                <div className="text-sm select-none text-blue-500 underline cursor-pointer" onClick={resetFilters}>
                    Reset Filters
                </div>
            </div>
            <div className="filter-content">
                <h2>Keyword</h2>
                <InputMain placeholder="Search products" classNames='py-0.5 !text-gray-800' onKeyUp={searchChangeHandler} onChange={(e: any) => setSearch(e.target.value)} value={search} />

            </div>
            <div className="filter-content">
                <h2>
                    Categories{" "}
                    <span>
                        <ChevronDown />
                    </span>
                </h2>
                <div className="filter-checkbox">
                    <ul>
                        {categories ? categories.slice(0, totalCategoriesVisible).map((category: CategoryInterface, i: any) => {
                            return (
                                <li key={i}>
                                    <CheckboxMain label={category.name} labelClassName="" order='reverse' onChange={() => categoryChangeHandler(category.uuid)} checked={filterOptions?.categories.indexOf(category.uuid) >= 0 ? true : false} />
                                </li>
                            )
                        }) : <Skeleton count={4} className='' />}

                    </ul>
                </div>
                <div className="more-view cursor-pointer mt-4" onClick={showAllCategories}>
                    View More {categories && categories.length == totalCategoriesVisible ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
            </div>
            {/* <div className="filter-content">
                        <h2>Location</h2>
                        <div className="group-img">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Select Location"
                            />
                        </div>
                    </div> */}
            <div className="filter-content">
                <h2 className="mb-4">Price Range</h2>
                <div className="filter-range">
                    <Box>
                        <form onSubmit={handleSubmit(priceRangeHandler)}>
                            <div className="row">
                                <div className="col-4">
                                    <InputMain placeholder='min' classNames='w-full px-1 text-center' register={register('min')} type="number" />
                                </div>
                                <div className="col-4">
                                    <InputMain placeholder='max' classNames='w-full px-1 text-center' register={register('max')} type="number" />
                                </div>
                                <div className="col-4 my-auto">
                                    <ButtonMain scheme="btn-primary" classNames='py-1' text='Go' />
                                </div>
                            </div>
                        </form>
                    </Box>
                </div>
                <div className="filter-range-amount">
                    {/* <h5>
                                Price: <span>$5 - $210</span>
                            </h5> */}

                </div>
            </div>
            <div className="filter-content">
                <h2>
                    By Rating{" "}
                    <span>
                        <ChevronDown size={18} />
                    </span>
                </h2>
                <ul className="rating-set">
                    <li>
                        <label className="checkboxs d-inline-flex">
                            <input type="checkbox" />
                            <span>
                                <i />
                            </span>
                        </label>
                        <Link className="rating" href="#">
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <i className="fa-regular fa-star" />
                            <span className="d-inline-block average-rating float-end">
                                (35)
                            </span>
                        </Link>
                    </li>
                    <li>
                        <label className="checkboxs d-inline-flex">
                            <input type="checkbox" />
                            <span>
                                <i />
                            </span>
                        </label>
                        <Link className="rating" href="#">
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <i className="fa-regular fa-star" />
                            <span className="d-inline-block average-rating float-end">
                                (40)
                            </span>
                        </Link>
                    </li>
                    <li>
                        <label className="checkboxs d-inline-flex">
                            <input type="checkbox" />
                            <span>
                                <i />
                            </span>
                        </label>
                        <Link className="rating" href="#">
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                            <span className="d-inline-block average-rating float-end">
                                (40)
                            </span>
                        </Link>
                    </li>
                    <li>
                        <label className="checkboxs d-inline-flex">
                            <input type="checkbox" />
                            <span>
                                <i />
                            </span>
                        </label>
                        <Link className="rating" href="#">
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                            <span className="d-inline-block average-rating float-end">
                                (20)
                            </span>
                        </Link>
                    </li>
                    <li>
                        <label className="checkboxs d-inline-flex">
                            <input type="checkbox" />
                            <span>
                                <i />
                            </span>
                        </label>
                        <Link className="rating" href="#">
                            <Star size={18} className="fill-yellow-400 text-yellow-400" />
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                            <i className="fa-regular fa-star" />
                            <span className="d-inline-block average-rating float-end">
                                (5)
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}