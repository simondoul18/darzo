"use client";
import React, { useEffect } from 'react'
import { de, es, fr, logo_small_svg, logo_svg, provider_01, provider_02, provider_03, provider_04, provider_05, provider_06, provider_07, us, us1, user_jpg } from '../../storage/image';
import Link from 'next/link';
import Image from 'next/image';
import Auth from '@/services/auth/Auth';
import { Bell, Globe, Maximize, Moon, Search } from 'react-feather';

export default function DashboardHeader() {
    const Reload = () => {
        // window.location.reload(false);
    }
    const handlesidebar = () => {
        var root = document.getElementsByTagName("html")[0];
        root.classList.toggle("menu-opened");
        var rootss: any = document.getElementById("session");
        rootss.classList.toggle("slide-nav");
    }
    //      const onMenuClik = () => {
    //     props.onMenuClick()
    //   }
    const pathname = 'pathname';
    const exclusionArray = [
        '/admin/signin',

    ]

    useEffect(() => {
        const handleClick = () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        }

        const maximizeBtn: any = document.querySelector('.win-maximize');
        maximizeBtn.addEventListener('click', handleClick);

        return () => {
            maximizeBtn.removeEventListener('click', handleClick);
        };

    }, []);


    const signOutUser = () => {
        let authService = new Auth;
        authService.signOut();
    }
    return (
        <>
            {/* Header */}
            <div className="header px-4 py-3 border border-b">
                <div className="header-left">
                    <Link href="index" className="logo">
                        <Image src={logo_svg} alt="Logo" width={30} height={30} />
                    </Link>
                    <Link href="index" className=" logo-small">
                        <Image
                            src={logo_small_svg}
                            alt="Logo"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
                <Link className="mobile_btn" id="mobile_btn" href="#;" onClick={() => handlesidebar()}>
                    <i className="fas fa-align-left" />
                </Link>
                <div className="header-split">
                    <div className="page-headers">
                        <div className="search-bar">
                            <span>
                                <i className="fe fe-search" >
                                    <Search size={18} /></i>
                            </span>
                            <input type="text" placeholder="Search" className="form-control" />
                        </div>
                    </div>
                    <ul className="nav user-menu">
                        {/* Notifications */}
                        <li className="nav-item" onClick={Reload}>
                            <Link href="/" className="viewsite" >
                                <i className="fe fe-globe me-2" ><Globe size={18} /></i>
                                View Site
                            </Link>
                        </li>
                        <li className="nav-item dropdown has-arrow dropdown-heads flag-nav">
                            <Link
                                className="nav-link"
                                data-bs-toggle="dropdown"
                                href="#;"
                                role="button"
                            >
                                <Image src={us1} alt="" height={20} />
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right">
                                <Link href="#;" className="dropdown-item">
                                    <Image
                                        src={us}
                                        className="me-2"
                                        alt=""
                                        height={16}
                                    />{" "}
                                    English
                                </Link>
                                <Link href="#;" className="dropdown-item">
                                    <Image
                                        src={fr}
                                        className="me-2"
                                        alt=""
                                        height={16}
                                    />{" "}
                                    French
                                </Link>
                                <Link href="#;" className="dropdown-item">
                                    <Image
                                        src={es}
                                        className="me-2"
                                        alt=""
                                        height={16}
                                    />{" "}
                                    Spanish
                                </Link>
                                <Link href="#;" className="dropdown-item">
                                    <Image
                                        src={de}
                                        className="me-2"
                                        alt=""
                                        height={16}
                                    />{" "}
                                    German
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item  has-arrow dropdown-heads ">
                            <Link href="#;" className="toggle-switch">
                                <i className="fe fe-moon" >
                                    <Moon size={18} />
                                </i>
                            </Link>
                        </li>
                        <li className="nav-item dropdown has-arrow dropdown-heads ">
                            <Link href="#;" data-bs-toggle="dropdown">
                                <i className="fe fe-bell" >
                                    <Bell size={18} />
                                </i>
                            </Link>
                            <div className="dropdown-menu notifications">
                                <div className="topnav-dropdown-header">
                                    <span className="notification-title">Notifications</span>
                                    <Link href="#;" className="clear-noti">
                                        {" "}
                                        Clear All{" "}
                                    </Link>
                                </div>
                                <div className="noti-content">
                                    <ul className="notification-list">
                                        <li className="notification-message">
                                            <Link href="/admin-notification">
                                                <div className="media d-flex">
                                                    <span className="avatar avatar-sm flex-shrink-0">
                                                        <Image
                                                            className="avatar-img rounded-circle"
                                                            alt=""
                                                            src={provider_01}
                                                        />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details">
                                                            <span className="noti-title">
                                                                Thomas Herzberg have been subscribed
                                                            </span>
                                                        </p>
                                                        <p className="noti-time">
                                                            <span className="notification-time">
                                                                15 Sep 2020 10:20 PM
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="notification-message">
                                            <Link href="/admin-notification">
                                                <div className="media d-flex">
                                                    <span className="avatar avatar-sm flex-shrink-0">
                                                        <Image
                                                            className="avatar-img rounded-circle"
                                                            alt=""
                                                            src={provider_02}
                                                        />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details">
                                                            <span className="noti-title">
                                                                Matthew Garcia have been subscribed
                                                            </span>
                                                        </p>
                                                        <p className="noti-time">
                                                            <span className="notification-time">
                                                                13 Sep 2020 03:56 AM
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="notification-message">
                                            <Link href="/admin-notification">
                                                <div className="media d-flex">
                                                    <span className="avatar avatar-sm flex-shrink-0">
                                                        <Image
                                                            className="avatar-img rounded-circle"
                                                            alt=""
                                                            src={provider_03}
                                                        />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details">
                                                            <span className="noti-title">
                                                                Yolanda Potter have been subscribed
                                                            </span>
                                                        </p>
                                                        <p className="noti-time">
                                                            <span className="notification-time">
                                                                12 Sep 2020 09:25 PM
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="notification-message">
                                            <Link href="/admin-notification">
                                                <div className="media d-flex">
                                                    <span className="avatar avatar-sm flex-shrink-0">
                                                        <Image
                                                            className="avatar-img rounded-circle"
                                                            alt="User Image"
                                                            src={provider_04}
                                                        />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details">
                                                            <span className="noti-title">
                                                                Ricardo Flemings have been subscribed
                                                            </span>
                                                        </p>
                                                        <p className="noti-time">
                                                            <span className="notification-time">
                                                                11 Sep 2020 06:36 PM
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="notification-message">
                                            <Link href="/admin-notification">
                                                <div className="media d-flex">
                                                    <span className="avatar avatar-sm flex-shrink-0">
                                                        <Image
                                                            className="avatar-img rounded-circle"
                                                            alt="User Image"
                                                            src={provider_05}
                                                        />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details">
                                                            <span className="noti-title">
                                                                Maritza Wasson have been subscribed
                                                            </span>
                                                        </p>
                                                        <p className="noti-time">
                                                            <span className="notification-time">
                                                                10 Sep 2020 08:42 AM
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="notification-message">
                                            <Link href="/admin-notification">
                                                <div className="media d-flex">
                                                    <span className="avatar avatar-sm flex-shrink-0">
                                                        <Image
                                                            className="avatar-img rounded-circle"
                                                            alt="User Image"
                                                            src={provider_06}
                                                        />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details">
                                                            <span className="noti-title">
                                                                Marya Ruiz have been subscribed
                                                            </span>
                                                        </p>
                                                        <p className="noti-time">
                                                            <span className="notification-time">
                                                                9 Sep 2020 11:01 AM
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="notification-message">
                                            <Link href="/admin-notification">
                                                <div className="media d-flex">
                                                    <span className="avatar avatar-sm flex-shrink-0">
                                                        <Image
                                                            className="avatar-img rounded-circle"
                                                            alt="User Image"
                                                            src={provider_07}
                                                        />
                                                    </span>
                                                    <div className="media-body flex-grow-1">
                                                        <p className="noti-details">
                                                            <span className="noti-title">
                                                                Richard Hughes have been subscribed
                                                            </span>
                                                        </p>
                                                        <p className="noti-time">
                                                            <span className="notification-time">
                                                                8 Sep 2020 06:23 AM
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="topnav-dropdown-footer">
                                    <Link href="/admin-notification">View all Notifications</Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item  has-arrow dropdown-heads ">
                            <Link href="#" className="win-maximize maximize-icon">
                                <Maximize size={18} />
                            </Link>
                        </li>

                        {/* User Menu */}
                        <li className="nav-item dropdown">
                            <Link
                                href="#;"
                                className="user-link  nav-link"
                                data-bs-toggle="dropdown"
                            >
                                <span className="user-img">
                                    <Image
                                        className="rounded-circle"
                                        src={user_jpg}
                                        // width={40}
                                        alt="Admin"
                                    />
                                    <span className="animate-circle" />
                                </span>
                                <span className="user-content">
                                    <span className="user-name">John Smith</span>
                                    <span className="user-details">Demo User</span>
                                </span>
                            </Link>
                            <div className="dropdown-menu menu-drop-user">
                                <div className="profilemenu ">
                                    <div className="user-detials">
                                        <Link href="account">
                                            <span className="profile-image">
                                                <Image
                                                    src={user_jpg}
                                                    alt="img"
                                                    className="profilesidebar"
                                                />
                                            </span>
                                            <span className="profile-content">
                                                <span>John Smith</span>
                                                <span>John@gmail.com</span>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="subscription-menu">
                                        <ul>
                                            <li>
                                                <Link href="/admin/account-settings">Profile</Link>
                                            </li>
                                            <li>
                                                <Link href="/admin/localization">Settings</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="subscription-logout">
                                        <div className="cursor-pointer" onClick={signOutUser}>Logout</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* /User Menu */}
                    </ul>
                </div>
            </div>
            {/* /Header */}
        </>

    )
}