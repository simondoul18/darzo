"use client";
import Link from "next/link";
import { Grid, List } from "react-feather";
export default function ProductSorting({ totalProductsFound }: { totalProductsFound?: number }) {
    return (
        <div className="row sorting-div">
            <div className="col-lg-4 col-sm-12 ">
                <div className="count-search">
                    {totalProductsFound && totalProductsFound > 0 && <h6>Found {totalProductsFound} products</h6>}
                </div>
            </div>
            <div className="col-lg-8 col-sm-12 d-flex justify-content-end ">
                <div className="sortbyset">
                    <div className="sorting-select">
                        <select className="form-control select">
                            <option>Price Low to High</option>
                            <option>Price High to Low</option>
                        </select>
                    </div>
                </div>
                <div className="grid-listview">
                    <ul>
                        <li>
                            <Link href="/search" className="active">
                                <Grid size={18} />
                            </Link>
                        </li>
                        <li>
                            <Link href="/Service-Lists">
                                <List size={18} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}