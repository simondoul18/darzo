"use client";
import Link from 'next/link'
export default function Breadcrumb(props: { title: string }) {
    return (
        <div className="breadcrumb-bar">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12">
                        <h2 className="breadcrumb-title">{props.title}</h2>
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}