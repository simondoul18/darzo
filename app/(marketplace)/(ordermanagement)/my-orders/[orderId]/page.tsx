"use client"
import OrderSummary from "@/components/checkout/OrderSummary"
import PaymentMethods from "@/components/checkout/PaymentMethods"
import ButtonMain from "@/components/global/buttons/ButtonMain"
import DeliveryProgressBar from "@/components/global/order/DeliveryProgressBar"
import CustomerOrderInterface from "@/interfaces/CustommerOrders/CustomerOrder"
import CustomerOrderStatusInterface from "@/interfaces/CustommerOrders/CustomerOrderStatusInterface"
import OriginResponse from "@/interfaces/Origin/OriginResponse"
import ProductInterface from "@/interfaces/Products/ProductInterface"
import CustomerOrderService from "@/services/fetch/Orders/CustomerOrders/CustomerOrderService"
import CustomerOrderStatusService from "@/services/fetch/Orders/CustomerOrders/CustomerOrderStatusService"
import { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { Lock } from "react-feather"

export default function OrderPaymentPage({ params }: {
    params: { orderId: string }
}) {


    useEffect(() => {
        fetchOrderStatuses();
        fetchOrder();
    }, []);

    // let [showLoaderForProceedToPaymentButton, setShowLoaderForProceedToPaymentButton] = useState<boolean>(false);
    let [product, setProduct] = useState<ProductInterface>();
    let [order, setOrder] = useState<CustomerOrderInterface>();
    let [statuses, setStatuses] = useState<CustomerOrderStatusInterface[] | undefined>([]);
    // let [addressId, setAddressId] = useState<number>();
    // let router = useRouter();

    function fetchOrder() {
        let productService = new CustomerOrderService;
        productService.fetchSingle(params.orderId, {
            "include": "order_items"
        }).then((response: AxiosResponse<OriginResponse<CustomerOrderInterface>>) => {
            setProduct(response.data.data?.order_items[0].product);
            setOrder(response.data.data);
        });
    }

    function fetchOrderStatuses() {
        let statusService = new CustomerOrderStatusService;
        statusService.fetchAllStatuses().then((response: AxiosResponse<OriginResponse<CustomerOrderStatusInterface[]>>) => {
            setStatuses(response?.data?.data);
            console.log(response?.data.data);


        })
    }


    return (
        <div className="row">
            <div className="col-12 mt-8">
                <DeliveryProgressBar items={statuses} currentSelectedItemId={order?.customer_order_status_id} />
            </div>

            <div className="col-12 mx-auto mt-24">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <PaymentMethods />
                    </div>

                    <div className="col-12 col-md-5">
                        <OrderSummary product={product} />
                        <div className="booking-pay">
                            <ButtonMain scheme="btn-primary" classNames="w-full">
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-4 text-center">Proceed Payment</div>
                                    <div className="col-4 justify-end flex"><Lock /></div>
                                </div>
                            </ButtonMain>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}