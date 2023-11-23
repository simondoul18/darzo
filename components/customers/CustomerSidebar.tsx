"use client";
import { useState, useEffect } from 'react'
import { avatar_02 } from "@/storage/image";
import Link from 'next/link';
import Image from 'next/image'
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { CreditCard, Grid, Heart, LogOut, MessageCircle, Settings, Smartphone, Star } from "react-feather";
export default function CustomerSidebar() {
    const { data: session, status } = useSession()
    const pathname = usePathname();
    let [profilePic, setProfilePic] = useState(avatar_02);
    useEffect(() => {
        //@ts-ignore
        if (session?.user?.profile_pic) {
            //@ts-ignore
            setProfilePic(session.user.profile_pic);
        }
    }, [session]);
    return (
        <div className="col-md-4 col-lg-3 theiaStickySidebar">
            {/* <StickyBox> */}
            <div className="settings-widget">
                <div className="settings-header">
                    <div className="settings-img">
                        <Image src={profilePic} alt="user" width={90} height={90} />
                    </div>
                    <h6>{session?.user?.name}</h6>
                    {/* @ts-ignore */}
                    <p>Member Since {new Date(session?.user?.created_at).toLocaleString('en-US', {
                        month: 'short', // 'short' or 'long' for abbreviated or full month name
                        year: 'numeric',
                    })}
                    </p>
                </div>
                <div className="settings-menu">
                    <ul>
                        <li>
                            <Link className={`${pathname == '/customer/dashboard' ? 'active' : ''}`} href="#">
                                <Grid size={18} /> <span className="ml-2">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/customer/my-orders" className={`${pathname == '/customer/my-orders' ? 'active' : ''}`}>
                                <Smartphone size={18} /> <span className="ml-2">My Orders</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/customer/favorites" className={`${pathname == '/customer/favorites' ? 'active' : ''}`}>
                                <Heart size={18} /> <span className="ml-2">Favorites</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <CreditCard size={18} /> <span className="ml-2">Wallet</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Star size={18} /> <span className="ml-2">Reviews</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <MessageCircle size={18} /> <span className="ml-2">Chat</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <Settings size={18} /> <span className="ml-2">Settings</span>
                            </Link>
                            <ul className={"ml-4 p-2"}>
                                <li>
                                    <Link href="/customer/settings/account">
                                        Account Settings
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/customer/settings/security">
                                        Security Settings
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/customer/settings/notifications">
                                        Notifications
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/customer/settings/connected-apps">
                                        Connected Apps
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" data-bs-toggle="modal" data-bs-target="#del-account">
                                        Delete Account
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="#">
                                <LogOut size={18} /> <span className="ml-2">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* </StickyBox> */}
        </div>
    )
}