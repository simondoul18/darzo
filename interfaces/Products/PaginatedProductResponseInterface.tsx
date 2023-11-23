import OriginResponse from "../Origin/OriginResponse";
import PaginatedProductsInterface from "./PaginatedProducts";

export default interface PaginatedProductResponseInterface extends OriginResponse {
    data: PaginatedProductsInterface;
}