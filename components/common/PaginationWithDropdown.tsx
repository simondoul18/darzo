"use client";

import PaginationInterface from "@/interfaces/Pagination/PaginationInterface";
import Pagination from "./Pagination";

export default function PaginationWithDropdown({ pageLinkPosition, pagination }: { pageLinkPosition?: string, pagination?: PaginationInterface }) {
    return (
        <div className="row">
            <div className="col-sm-6">
                {/* <div className="review-entries">
                    <span>Show</span>
                    <select>
                        <option>07</option>
                        <option>08</option>
                    </select>
                    <span>entries</span>
                </div> */}
            </div>
            <div className="col-sm-6">
                {
                    pagination && <Pagination position={"right"} pagination={pagination} />
                }
            </div >
        </div >
    )
}