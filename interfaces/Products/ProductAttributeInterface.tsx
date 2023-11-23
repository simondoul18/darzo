export default interface ProductAttributeInterface {
    id: BigInteger;
    product_id: BigInteger;
    name: string;
    value: string;
    is_custom?: boolean;
    created_at?: string;
    updated_at?: string;
}