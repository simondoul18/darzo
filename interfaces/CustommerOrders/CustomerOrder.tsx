import CustomerOrdeDeliveryInterface from "./CustomerOrderDelivery";
import CustomerOrderItemsInterface from "./CustomerOrderItemsInterface";
import CustomerOrderStatusInterface from "./CustomerOrderStatusInterface";

export default interface CustomerOrderInterface {
    customer_order_status_id?: number;
    reference?: string;
    uuid?: string;
    id?: number;
    upadated_at?: string;
    created_at?: string;
    delivery: CustomerOrdeDeliveryInterface;
    order_items: CustomerOrderItemsInterface[];
    status: CustomerOrderStatusInterface;
}