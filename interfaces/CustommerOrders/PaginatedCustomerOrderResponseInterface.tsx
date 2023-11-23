import OriginResponse from "../Origin/OriginResponse";
import PaginatedCustomerOrderInterface from "./PaginatedCustomerOrderInterface";

export default interface PaginatedCustomerOrderResponseInterface extends OriginResponse {
    data: PaginatedCustomerOrderInterface;
}