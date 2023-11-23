"use client"
import { avatar_03, service_18 } from "@/storage/image";
import Link from "next/link"
import Image from 'next/image';
import CustomerOrderInterface from "@/interfaces/CustommerOrders/CustomerOrder";
import { PlusCircle, RefreshCw } from "react-feather";
export default function OrderListItem({ order }: { order?: CustomerOrderInterface }) {
    return (
        <div className="booking-list flex border shadow-sm">
            <div className="booking-widget">
                <div className="booking-img">
                    <Link href="#">
                        <Image src={order?.order_items[0]?.product?.images[0].url ? order?.order_items[0]?.product?.images[0].url : service_18} width={300} height={300} alt="User Image" />
                    </Link>
                </div>
                <div className="booking-det-info">
                    <h3>
                        <Link className="font-bold text-2xl hover:underline cursor-pointer" href={"/my-orders/" + order?.uuid}>{order?.reference}</Link>
                        <span className="badge badge-danger">{order?.status.name}</span>
                    </h3>
                    <ul className="booking-details">
                        <li>
                            <span className="book-item">Booking Date</span> : {order?.created_at ? new Date(order?.created_at).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: 'short',
                                year: 'numeric',
                            }) : 'N/A'}
                        </li>
                        <li>
                            <span className="book-item">Amount</span> : {order?.order_items[0]?.product?.currency?.symbol} {order?.order_items[0]?.price}
                        </li>
                        {/* <li>
                            <span className="book-item">Location</span> : Alabama, USA
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className="booking-action flex flex-col ml-auto !items-end">
                <Link href="/bookings" className="btn btn-primary">
                    <RefreshCw size={18} /> <span className="ml-2">Order again</span>
                </Link>
                <Link
                    href="#;"
                    className="btn btn-secondary"
                >
                    <PlusCircle size={18} /> <span className="ml-2">Add Review</span>
                </Link>
                <div className="view-action">
                    <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                    </div>
                </div>
            </div>
        </div>
    )
}