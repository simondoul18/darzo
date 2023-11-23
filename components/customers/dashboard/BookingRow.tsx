"use client"
import { avatar_02 } from "@/storage/image";
import Link from "next/link"
import Image from 'next/image';
import { Calendar } from "react-feather";
export default function BookingRow() {
    return (
        <tr>
            <td>
                <h2 className="table-avatar">
                    <Link href="#" className="avatar avatar-m me-2">
                        <Image
                            className="avatar-img rounded"
                            src={avatar_02}
                            alt="User Image"
                        />
                    </Link>
                    <Link href="#">
                        Product title
                        <span>
                            <Calendar size={18} /> 17 Sep 2022
                        </span>
                    </Link>
                </h2>
            </td>
            <td>
                <h2 className="table-avatar table-user">
                    <Link href="#" className="avatar avatar-m me-2">
                        <Image
                            className="avatar-img"
                            src={avatar_02}
                            alt="User Image"
                        />
                    </Link>
                    <Link href="#">
                        John Smith
                        <span>john@gmail.com</span>
                    </Link>
                </h2>
            </td>
            <td className="text-end">
                <Link href="#" className="btn btn-light-danger">
                    Cancel
                </Link>
            </td>

        </tr>
    )
}