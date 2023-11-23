"use client";
import AddressList from "@/components/checkout/AddressList";
import OrderSummary from "@/components/checkout/OrderSummary";
import ButtonMain from "@/components/global/buttons/ButtonMain";
import CustomerOrderInterface from "@/interfaces/CustommerOrders/CustomerOrder";
import OriginResponse from "@/interfaces/Origin/OriginResponse";
import ProductInterface from "@/interfaces/Products/ProductInterface";
import { publish } from "@/services/Events/EventsManager";
import CustomerOrderService from "@/services/fetch/Orders/CustomerOrders/CustomerOrderService";
import ProductService from "@/services/fetch/Products/ProductService";
import { AxiosResponse } from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckoutPage() {

    let [showLoaderForProceedToPaymentButton, setShowLoaderForProceedToPaymentButton] = useState<boolean>(false);
    let productId: string = '';
    let params = useSearchParams();
    let [product, setProduct] = useState<ProductInterface>();
    let [addressId, setAddressId] = useState<number>();
    let router = useRouter();


    useEffect(() => {
        productId = params.get('product_id') ?? '';
        if (!productId) router.replace('404');
        fetchProduct();
    }, [])

    function createOrderAndProceedToPayment() {
        setShowLoaderForProceedToPaymentButton(true);
        publish('show:fullScreenDynamicLoader', "Creating order...");
        let orderService = new CustomerOrderService;
        orderService.createProduct({
            "order_items": [
                {
                    "product_id": product?.uuid
                }
            ],
            "address_id": addressId
        }).then((response: AxiosResponse<OriginResponse<CustomerOrderInterface>>) => {
            setShowLoaderForProceedToPaymentButton(false);
            publish('dismiss:fullScreenDynamicLoader', null);

            //Redirect the user here to Payment Page
            router.push('/my-orders/' + response.data?.data?.uuid);
        }).catch((error: any) => {
            setShowLoaderForProceedToPaymentButton(false);
            publish('dismiss:fullScreenDynamicLoader', null);
        });
    }

    function fetchProduct() {
        let productService = new ProductService;
        productService.fetch(productId, {
            "include": "categories,currency,images"
        }).then((response: AxiosResponse<OriginResponse<ProductInterface>>) => {
            setProduct(response.data.data);
        });
    }

    function addressChangeHandler(addressId: number) {
        setAddressId(addressId);
    }


    return (
        <div className="row">
            <div className="col-12 mx-auto">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <AddressList addressChangeHandler={addressChangeHandler} />
                    </div>

                    <div className="col-12 col-md-5">
                        <OrderSummary product={product} />
                        <div className="booking-pay">
                            <ButtonMain text="Proceed to payment!" scheme="btn-primary" classNames="w-full" click={createOrderAndProceedToPayment} showLoaderOnRequest={showLoaderForProceedToPaymentButton} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}