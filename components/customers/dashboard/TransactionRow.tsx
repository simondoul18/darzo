"use client"
import { trans_icon_01 } from "@/storage/image";
// import Link from "next/link"
import Image from 'next/image';
import { Calendar, Clock } from "react-feather";
export default function TransactionRow() {
    return (
        <tr>
            <td>
                <div className="table-book d-flex align-items-center">
                    <span className="book-img">
                        <Image src={trans_icon_01} alt="" />
                    </span>
                    <div>
                        <h6>Service Booking</h6>
                        <p>
                            <Calendar size={18} />
                            22 Sep 2023
                            <span>
                                <Clock size={18} /> 10:12 AM
                            </span>
                        </p>
                    </div>
                </div>
            </td>
            <td className="text-end">
                <h5 className="trans-amt">$280.00</h5>
            </td>
        </tr>
    )
}