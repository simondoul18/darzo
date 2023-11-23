import ProductInterface from "../Products/ProductInterface";

export default interface CustomerOrderItemsInterface {
    id?: number;
    order_id: number;
    price: number;
    product_id: number;
    product?: ProductInterface;
    created_at?: string;
    updated_at: string;
}