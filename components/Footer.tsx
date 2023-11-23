"use client";

import { discover, logo_light, mastercard, stripe, visa } from "@/storage/image";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "react-feather";
export default function Footer() {
    return (
        <footer className="footer footer-five">

            <div className="footer-top aos" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="index-3.html"><Image src={logo_light} alt="logo" style={{
                                        width: 'auto',
                                        height: 'auto'
                                    }} /></a>
                                </div>
                                <div className="footer-content">
                                    <p> </p>
                                </div>
                                <div className="footer-selects">
                                    <h2 className="footer-title">Language & Currency</h2>
                                    <div className="row">
                                        <div className="col-lg-12 d-flex">
                                            <div className="footer-select">
                                                <select className="select">
                                                    <option>English</option>
                                                    <option>France</option>
                                                    <option>Spanish</option>
                                                </select>
                                            </div>
                                            <div className="footer-select">
                                                <select className="select">
                                                    <option>US Dollars</option>
                                                    <option>INR</option>
                                                    <option>Kuwait</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-widget footer-menu">
                                <h2 className="footer-title">Quick Links</h2>
                                <ul>
                                    <li>
                                        <a href="about-us.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="blog-grid.html">Blogs</a>
                                    </li>
                                    <li>
                                        <a href="contact-us.html">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="provider-signup.html">Become a Professional</a>
                                    </li>
                                    <li>
                                        <a href="user-signup.html">Become a User</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget footer-contact">
                                <h2 className="footer-title">Contact Us</h2>
                                <div className="footer-contact-info">
                                    <div className="footer-address">
                                        <p><span><i className="fa fa-map-pin"></i></span> 367 Hillcrest Lane, Irvine,
                                            California, United States</p>
                                    </div>
                                    <p><span><i className="fa fa-phone"></i></span> 321 546 8764</p>
                                    <p className="mb-0"><span><i className="fa fa-envelope"></i></span> info@darzo.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h2 className="footer-title">Follow Us</h2>
                                <div className="social-icon">
                                    <ul>
                                        <li>
                                            <a href="#!" target="_blank"><Facebook /> </a>
                                        </li>
                                        <li>
                                            <a href="#!" target="_blank"><Twitter /> </a>
                                        </li>
                                        <li>
                                            <a href="#!" target="_blank"><Instagram /></a>
                                        </li>
                                        <li>
                                            <a href="#!" target="_blank"><Linkedin /></a>
                                        </li>
                                    </ul>
                                </div>
                                <h2 className="footer-subtitle">Newsletter Signup</h2>
                                <div className="subscribe-form">
                                    <input type="email" className="form-control" placeholder="Enter Email Address" />
                                    <button type="submit" className="btn footer-btn">
                                        <Send />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <div className="payment-image">
                                    <ul>
                                        <li>
                                            <a href="#"><Image src={visa} alt="img" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><Image src={mastercard} alt="img" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><Image src={stripe} alt="img" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><Image src={discover} alt="img" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="copyright-text">
                                    <p className="mb-0">Copyright &copy; 2023. All Rights Reserved.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="copyright-menu">
                                    <ul className="policy-menu">
                                        <li>
                                            <a href="privacy-policy.html">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="terms-condition.html">Terms & Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}