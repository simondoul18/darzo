"use client"
import { work_bg_03 } from "@/storage/image";
import CategoryGrid from '@/components/categories/CategoryGrid'
import Breadcrumb from '@/components/global/Breadcrumb'
import Image from 'next/image'
export default function CategoriesPage() {
    const n = 7;
    return (
        <div>
            <div className="bg-img">
                <Image src={work_bg_03} alt="img" className="bgimg1" />
                <Image src={work_bg_03} alt="img" className="bgimg2" />
            </div>
            {/* Breadcrumb */}
            <Breadcrumb title={'Categories'} />
            {/* /Breadcrumb */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        {/* Category List */}
                        {
                            [...Array(n)].map((e, i) => <CategoryGrid key={i} />)
                        }
                        {/* /Category List */}
                    </div>
                </div>
            </div>
        </div>
    )
}