"use client"
import Sorting from "@/components/common/Sorting";
import OrderGridItem from "@/components/order/OrderGridItem";
import PaginationWithDropdown from "@/components/common/PaginationWithDropdown";
export default function CustomerFavorites() {
    const n = 9;
    return (
        <div className="col-md-8 col-lg-9">
            <Sorting title="Favorites" />
            <div className="row">
                {
                    [...Array(n)].map((e, i) => <OrderGridItem key={i} />)
                }
            </div>
            <PaginationWithDropdown pageLinkPosition="right" />
        </div>
    )
}