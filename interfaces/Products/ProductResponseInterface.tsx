import OriginResponse from "../Origin/OriginResponse";
import ProductInterface from "./ProductInterface";

export default interface ProductResponseInterface extends OriginResponse {
    data: ProductInterface | ProductInterface[];
}