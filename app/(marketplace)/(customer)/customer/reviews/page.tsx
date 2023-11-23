"use client"
import Sorting from "@/components/common/Sorting";
import CustomerReview from "@/components/reviews/CustomerReview";
import PaginationWithDropdown from "@/components/common/PaginationWithDropdown";
export default function CustomerReviews() {
    const n = 4;
    return (
        <div className="col-md-8 col-lg-9">
            <Sorting title="Reviews" />
            {
                [...Array(n)].map((e, i) => <CustomerReview key={i} />)
            }
            <PaginationWithDropdown />
        </div>
    )
}