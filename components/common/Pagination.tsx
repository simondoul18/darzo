"use client";
import PaginationInterface from "@/interfaces/Pagination/PaginationInterface";
import Link from "next/link";
export default function Pagination({ position, pagination }: { position?: string, pagination?: PaginationInterface }) {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="blog-pagination rev-page">
                    <nav>
                        <ul className={`pagination ${position == 'left' ? 'justiy-start' : (position == 'right' ? 'justify-end' : (position == 'middle' ? 'justify-center' : ''))}`}>

                            {
                                pagination?.links && pagination?.links.length > 0 && pagination?.links.map((link, i) => {
                                    return (
                                        <li className="page-item" key={i}>
                                            <div className="" dangerouslySetInnerHTML={{ __html: link.label }}>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}