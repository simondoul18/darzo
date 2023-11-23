import { category_01, service_06 } from "@/storage/image";
import Link from 'next/link'
import Image from 'next/image'
export default function CategoryGrid() {
    return (
        <div className="col-md-6 col-lg-4 d-flex">
            <div className="category-card flex-fill">
                <div className="category-img">
                    <Link href="/search">
                        <Image src={service_06} className="img-fluid" alt="" />
                    </Link>
                </div>
                <div className="category-info">
                    <div className="category-name">
                        <span className="category-icon">
                            <Image src={category_01} alt="" />
                        </span>
                        <h6><Link href="/search">Computer</Link></h6>
                    </div>
                    <p>22 Services</p>
                </div>
            </div>
        </div>
    )
}