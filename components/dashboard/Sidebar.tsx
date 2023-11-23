"use client";
import { logo_light, logo_small_svg, logo_svg } from "@/storage/image";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Box, Briefcase, Grid, List, Tag } from "react-feather";



export default function Sidebar() {
    const [isSideMenu, setSideMenu] = useState(false);
    const pathname = '';

    const toggleSidebar = (value: any) => {
        setSideMenu(value)
    }
    const handleSidebar = (e: any) => {
        if (e.target.checked == true) {
            document.body.classList.add("mini-sidebar");
        } else if (e.target.checked == false) {
            document.body.classList.remove("mini-sidebar");
        }
    }
    const expandMenu = () => {
        document.body.classList.remove("expand-menu");
    };
    const expandMenuOpen = () => {
        document.body.classList.add("expand-menu");
    };
    return (
        <>
            <div className="sidebar flex flex-col" id="sidebar"
                onMouseOver={expandMenuOpen}
                onMouseLeave={expandMenu}
            >
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <Link href="index">
                            <Image src={logo_light} className="img-fluid logo" alt="" />
                        </Link>
                        <Link href="index">
                            <Image src={logo_light} className="img-fluid logo-small" alt="" />
                        </Link>
                    </div>
                    <div className="siderbar-toggle">
                        <label className="switch" id="toggle_btn" >
                            <input type="checkbox" onChange={(e) => handleSidebar(e)} />
                            <span className="slider round" />
                        </label>
                    </div>
                </div>
                <div className="sidebar-inner mini-scrollbar">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li className="menu-title m-0">
                                <h6>Home</h6>
                            </li>
                            <li>
                                <Link className="" href="/admin/dashboard" ><Grid size={18} /> <span>Dashboard</span></Link>
                            </li>
                            <li className="menu-title">
                                <h6>Products</h6>
                            </li>
                            <li>
                                <Link className="" href="/products"><Briefcase size={18} />
                                    <span>Products</span>
                                </Link>
                            </li>

                            <li>
                                <Link className="" href="/orders"><Box size={20} />
                                    <span>Orders</span>
                                </Link>
                            </li>

                            <li>
                                <Link className="" href="/tags"><Tag size={20} />
                                    <span>Tags</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div >
        </>
    );
}