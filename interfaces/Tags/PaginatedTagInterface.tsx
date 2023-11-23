import PaginationInterface from "../Pagination/PaginationInterface";
import TagInterface from "./TagInterface";

export default interface PaginatedTagsInterface extends PaginationInterface {
    data: TagInterface[];
}