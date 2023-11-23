"use client";

import BackNavigation from "@/components/global/BackNavigation/BackNavigation";
import OrdersTable from "@/components/products/Table/OrderTable";

export default function OrdersPage() {

    return (
        <div className="container flex flex-col">
            <div className="flex">
                <BackNavigation title="Orders" backText="Go back" />
            </div>

            <div className="mt-12">
                <OrdersTable />
            </div>
        </div>
    )
}