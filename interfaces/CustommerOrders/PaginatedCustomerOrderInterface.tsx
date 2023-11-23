import PaginationInterface from "../Pagination/PaginationInterface";
import CustomerOrderInterface from "./CustomerOrder";

export default interface PaginatedCustomerOrderInterface extends PaginationInterface {
    data: CustomerOrderInterface[];
}