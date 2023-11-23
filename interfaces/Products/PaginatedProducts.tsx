import PaginationInterface from "../Pagination/PaginationInterface";
import ProductInterface from "./ProductInterface";

export default interface PaginatedProductsInterface extends PaginationInterface {
    data: ProductInterface[];
}