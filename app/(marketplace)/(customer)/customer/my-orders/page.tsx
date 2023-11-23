"use client"
import Sorting from "@/components/common/Sorting";
import OrderListItem from "@/components/order/OrderListItem";
import PaginationWithDropdown from "@/components/common/PaginationWithDropdown";
import CustomerOrderInterface from "@/interfaces/CustommerOrders/CustomerOrder";
import { useEffect, useState } from "react";
import CustomerOrderService from "@/services/fetch/Orders/CustomerOrders/CustomerOrderService";
import { AxiosResponse } from "axios";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import PaginatedCustomerOrderInterface from "@/interfaces/CustommerOrders/PaginatedCustomerOrderInterface";
import PaginationInterface from "@/interfaces/Pagination/PaginationInterface";
export default function CustomerBookings() {
    const n = 4;

    useEffect(() => {
        fetchAllCustomerOrders();
    }, []);


    let [customerOrders, setCustomerOrders] = useState<CustomerOrderInterface[]>();
    let [pagination, setPagination] = useState<PaginationInterface>();

    function fetchAllCustomerOrders() {
        let orderService = new CustomerOrderService;

        orderService.fetchAllCustomerOrders({
            "include": "order_items,order_delivery,order_status"
        }).then((response: AxiosResponse<OriginResponse<PaginationInterface<CustomerOrderInterface[]>>>) => {
            setCustomerOrders(response.data?.data?.data);
            setPagination(response.data?.data);
        })
    }


    return (
        <div className="col-md-8 col-lg-9">
            <Sorting title="My Orders" />
            {
                customerOrders && customerOrders.map((order, i) => <OrderListItem key={i} order={order} />)
            }

            {
                pagination && <PaginationWithDropdown pagination={pagination} />
            }
        </div>
    )
}