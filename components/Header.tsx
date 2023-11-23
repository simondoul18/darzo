"use client"
import React, { useState, useEffect } from 'react'
import { avatar_01, avatar_02, avatar_03, avatar_04, bell_icon, circle_icon, fr, logo, logo_light, logo_small, message_icon, us } from '../storage/image';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"
import { Globe, LogOut, Menu, Search, User } from 'react-feather';
export default function Header() {

    // const pathname = null;
    const pathname = usePathname();
    const router = useRouter();
    const { data: session, status } = useSession()
    let [profilePic, setProfilePic]: any = useState(avatar_02);

    useEffect(() => {
        // @ts-ignore
        if (session?.user?.profile_pic) {
            // @ts-ignore
            setProfilePic(session.user.profile_pic);
        }
    }, [session]);

    const [notifcations, setNotifcations] = useState(false);
    const [flags, setFlags] = useState(false);
    const [language, setLanguage] = useState(false);
    const [profile, setProfile] = useState(false);
    const [search, setSearch] = useState<string>('');


    const onHandleMobileMenu = () => {
        var root = document.getElementsByTagName("html")[0];
        root.classList.add("menu-opened");
    };

    const onhandleCloseMenu = () => {
        var root = document.getElementsByTagName("html")[0];
        root.classList.remove("menu-opened");
    };
    const [menu, setMenu] = useState(false);
    const toggleMobileMenu = () => {
        setMenu(!menu)
    }

    function searcHandler(e: any) {
        if ((e.key == 'Enter' || e.type == "click") && search.length > 0) {
            router.push(`/products/all?search=${search}`);
        }
    }
    return (
        <>
            <header className="header" onClick={() => toggleMobileMenu()}>
                <div className="container">
                    <nav className="flex py-3 justify-between">
                        <div className="flex items-center">
                            <div className="text-main-tealish-800 sm:block md:hidden" onClick={() => onHandleMobileMenu()}>
                                <Menu size={28} />
                            </div >
                            <Link href="/home" className="navbar-brand logo">

                                <Image src={logo_light} width={134} height={82} style={{
                                    objectFit: 'contain'
                                }} alt="Logo" priority={false} />
                            </Link>

                            <div className="main-menu-wrapper">
                                <div className="menu-header">
                                    <Link id="menu_close" className="menu-close" href="#" onClick={() => onhandleCloseMenu()}>
                                        {" "}
                                        X
                                    </Link>
                                </div>
                            </div>
                        </div >

                        <div className="w-6/12 sm:w-4/12 lg:w-6/12 my-auto">
                            <div className="flex">
                                <input type="text" className="form-control" placeholder='Search Darzo' onKeyUp={searcHandler} onChange={(e) => setSearch(e.target.value)} />
                                <div className="px-3 py-1 rounded-r bg-main-purple-800 hover:bg-main-purple-900 transition duration-300 flex justify-center items-center text-white cursor-pointer" onClick={searcHandler}>
                                    <Search />
                                </div>
                            </div>
                        </div>
                        <ul className="nav header-navbar-rht">
                            {status === "authenticated" && (
                                <>
                                    {
                                        false && (
                                            <>
                                                <li className="nav-item dropdown lang-nav">
                                                    <div className="flag-dropdown">
                                                        <Link className={`dropdown-toggle nav-link ${language === true ? "show" : ""}`} data-bs-toggle="dropdown" href="#" role="button" onClick={() => setLanguage(!language)}>
                                                            <Globe size={18} className="me-1" /> <span>EN</span>
                                                        </Link>
                                                        <div className="dropdown-menu">
                                                            <Link href="#;" className="dropdown-item">
                                                                English
                                                            </Link>
                                                            <Link href="#;" className="dropdown-item">
                                                                French
                                                            </Link>
                                                            <Link href="#;" className="dropdown-item">
                                                                Spanish
                                                            </Link>
                                                            <Link href="#;" className="dropdown-item">
                                                                German
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="nav-item flag-nav dropdown">
                                                    <div className="flag-dropdown">
                                                        <Link className={`dropdown-toggle nav-link ${flags === true ? "show" : ""}`} data-bs-toggle="dropdown" href="#" role="button" onClick={() => setFlags(!flags)}>
                                                            <Image src={us} className="rounded-circle me-1" height={16} alt="" />  <span>USD</span>
                                                        </Link>
                                                        <div className="dropdown-menu">
                                                            <Link href="#;" className="dropdown-item">
                                                                <Image src={us} alt="" height={16} /> USD
                                                            </Link>
                                                            <Link href="#;" className="dropdown-item">
                                                                <Image src={fr} alt="" height={16} /> Euro
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="nav-item logged-item msg-nav">
                                                    <Link href="/customer-chat" className="nav-link">
                                                        <Image src={message_icon} alt="" />
                                                    </Link>
                                                </li>
                                            </>
                                        )
                                    }


                                    <li className="nav-item dropdown logged-item noti-nav my-auto">
                                        {/* <Link href="#" className={`dropdown-toggle nav-link ${notifcations === true ? "show" : ""}`} data-bs-toggle="dropdown" onClick={() => setNotifcations(!notifcations)}>
                                            <Image src={bell_icon} alt="" />
                                        </Link> */}
                                        <div className={`dropdown-menu notify-blk notifications ${notifcations === true ? "show" : ""}`}>
                                            <div className="topnav-dropdown-header">
                                                <div>
                                                    <span className="notification-title">Notifications</span>
                                                    <select>
                                                        <option>All</option>
                                                        <option>Read</option>
                                                    </select>
                                                </div>
                                                <Link href="#;" className="clear-noti">Mark all as read <i className="fa-regular fa-circle-check" /> </Link>
                                            </div>
                                            <div className="noti-content">
                                                <ul className="notification-list">
                                                    <li className="notification-message">
                                                        <div className="media d-flex">
                                                            <Link href="notification">
                                                                <span className="avatar avatar-sm avatar-online flex-shrink-0">
                                                                    <Image className="avatar-img rounded-circle" alt="User Image" src={avatar_02} />
                                                                </span>
                                                            </Link>
                                                            <div className="media-body flex-grow-1">
                                                                <Link href="notification"><p className="noti-details">Lex Murph <span className="noti-title"> requested access to</span> Computer &amp; Server AMC Service </p></Link>
                                                                <div className="notify-btns">
                                                                    <button className="btn btn-primary">Accept</button>
                                                                    <button className="btn btn-secondary">Cancel</button>
                                                                </div>
                                                                <p className="noti-time"><span className="notification-time">Today 10:04 PM</span></p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="notification-message">
                                                        <Link href="notification">
                                                            <div className="media d-flex">
                                                                <span className="avatar avatar-sm avatar-online flex-shrink-0">
                                                                    <Image className="avatar-img rounded-circle" alt="User Image" src={avatar_01} />
                                                                </span>
                                                                <div className="media-body flex-grow-1">
                                                                    <p className="noti-details">Ray Arnold <span className="noti-title">left 6 comments on</span> Commercial Painting Services</p>
                                                                    <p className="noti-time"><span className="notification-time">Today 9:45 PM</span></p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="notification-message">
                                                        <Link href="notification">
                                                            <div className="media d-flex">
                                                                <span className="avatar avatar-sm avatar-online flex-shrink-0">
                                                                    <Image className="avatar-img rounded-circle" alt="User Image" src={avatar_03} />
                                                                </span>
                                                                <div className="media-body flex-grow-1">
                                                                    <p className="noti-details">Dennis Nedry <span className="noti-title">commented on</span> Electric Panel Repairing Service </p>
                                                                    <h6>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  commodo consequat..”</h6>
                                                                    <p className="noti-time"><span className="notification-time">Yesterday 8:17 AM</span></p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                    <li className="notification-message">
                                                        <Link href="notification">
                                                            <div className="media d-flex">
                                                                <span className="avatar avatar-sm avatar-online flex-shrink-0">
                                                                    <Image className="avatar-img rounded-circle" alt="User Image" src={avatar_04} />
                                                                </span>
                                                                <div className="media-body flex-grow-1">
                                                                    <p className="noti-details">John Hammond <span className="noti-title">has booked your</span> House Cleaning Services </p>
                                                                    <p className="noti-time"><span className="notification-time">Last Wednesday at 11:15 AM</span></p>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="topnav-dropdown-footer">
                                                <Link href="notification">View More <Image src={circle_icon} alt="" /></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown has-arrow account-item">
                                        <Link href="#" className={`dropdown-toggle nav-link ${profile === true ? "show" : ""}`} data-bs-toggle="dropdown" onClick={() => setProfile(!profile)}>
                                            <div className="user-infos">
                                                <span className="user-img">
                                                    {/* @ts-ignore */}
                                                    <Image src={profilePic} className="rounded-circle" alt="user" width={38} height={38} />
                                                    {/* <Image src={avatar_02} className="rounded-circle" alt="" /> */}
                                                </span>
                                                <div className="user-info">
                                                    {/* @ts-ignore */}
                                                    <h6>{session.user?.name}</h6>
                                                    {/* @ts-ignore */}
                                                    <p>{session.user?.role.name}</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-end emp">
                                            <Link className="dropdown-item" href="/customer/settings/account">
                                                <User size={18} /> Profile
                                            </Link>
                                            <Link className="dropdown-item" href="/">
                                                <LogOut size={18} /> Logout
                                            </Link>
                                        </div>
                                    </li>
                                </>
                            )
                            }
                            {
                                status === 'unauthenticated' && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link header-reg" href="/choose-signup">
                                                Register
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link header-login" href="login">
                                                <i className="fa-regular fa-circle-user me-2" />
                                                Login
                                            </Link>
                                        </li>
                                    </>
                                )
                            }
                        </ul >
                    </nav >
                </div >
            </header >

        </>
    )
}