"use client"
import { work_bg_03 } from "@/storage/image";
import Breadcrumb from '@/components/global/Breadcrumb'
import ProducerGrid from '@/components/producers/ProducerGrid'
import Pagination from "@/components/common/Pagination";
import Image from 'next/image'
export default function Producers() {
    const n = 12;
    return (
        <>
        <div className="bg-img">
            <Image src={work_bg_03} alt="img" className="bgimg1" />
            <Image src={work_bg_03} alt="img" className="bgimg2" />
        </div>
        <Breadcrumb title={'Producers'} />
        <div className="content">
            <div className="container">
                <div className="row">
                    {
                        [...Array(n)].map((e, i) => <ProducerGrid key={i} />)
                    }
                    <Pagination />
                </div>
            </div>
        </div>
        </>
    )
}