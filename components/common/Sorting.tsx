"use client";
import { filter_icon } from "@/storage/image";
import Link from "next/link"
import Image from 'next/image'
import { Calendar, Grid, List } from "react-feather";
export default function Sorting(props: { title: string }) {
    return (
        <div className="row align-items-center">
            <div className="col-md-4">
                <div className="widget-title">
                    <h4>{props.title}</h4>
                </div>
            </div>
            <div className="col-md-8 d-flex align-items-center justify-content-md-end flex-wrap">
                <div className="review-sort me-2">
                    <p>Sort</p>
                    <select className="select">
                        <option>A -&gt; Z</option>
                        <option>Most helful</option>
                    </select>
                </div>
                {props.title !== 'Reviews' &&
                    <div className="grid-listview">
                        <ul>
                            <li>
                                <Link href="">
                                    <Calendar size={18} />
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <Image src={filter_icon} alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/customer/favorites">
                                    <Grid size={18} />
                                </Link>
                            </li>
                            <li>
                                <Link href="/customer/bookings" className="active">
                                    <List size={18} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}