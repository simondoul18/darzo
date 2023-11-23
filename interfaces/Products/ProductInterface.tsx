import CategoryInterface from "../Categories/CategoryInterface";
import CurrencyInterface from "../Currencies/CurrencyInterface";
import ProductAttributeInterface from "./ProductAttributeInterface";
import ProductHaveCategoriesInterface from "./ProductHaveCategoryInterface";
import ProductHaveTagInterface from "./ProductHaveTagInterface";
import ProductImageInterface from "./ProductImageInterface";

export default interface ProductInterface {
    id?: BigInteger;
    name: string;
    uuid?: string;
    description?: string;
    categories: CategoryInterface[];
    quantity: number;
    sku: string;
    attributes: any;
    custom_attributes: ProductAttributeInterface[];
    tags: ProductHaveTagInterface[];
    sell_on_crm: boolean;
    sell_on_marketplace: boolean;
    images: ProductImageInterface[];
    price: number;
    currency_id: BigInteger;
    currency?: CurrencyInterface;
    created_at?: string;
    updated_at?: string;
}