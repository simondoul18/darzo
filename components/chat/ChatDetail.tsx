"use client"
import { avatar_02, service_01, service_03, service_04, service_05 } from "@/storage/image";
import Link from "next/link"
import Image from 'next/image'
import { AlertCircle, ExternalLink, Mail, MapPin, MoreHorizontal, Phone, Trash2 } from "react-feather";
export default function ChatDetail() {
    return (
        <div className="col-xl-3 chat-cont-profile" id="task_window">
            <div className="card mb-sm-3 mb-md-0 flex-fill">
                <div className="card-header">
                    <div className="profile-wrap">
                        <div className="chat-profile">
                            <div className="chat-profile-img">
                                <Image src={avatar_02} alt="" />
                            </div>
                            <div className="chat-profile-info">
                                <h6>John Doe</h6>
                                <p>Newyork</p>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <Link href="#"><Mail size={18} /></Link>
                            </li>
                            <li>
                                <Link href="#"><Phone size={18} /></Link>
                            </li>
                            <li>
                                <Link href="#"><MapPin size={18} /></Link>
                            </li>
                            <li>
                                <Link href="#"><MoreHorizontal size={18} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <div className="chat-pro-list">
                        <ul>
                            <li>
                                <span className="role-title"><i className="fa-solid fa-briefcase" />Company</span><span className="role-info">Company Name</span>
                            </li>
                            <li>
                                <span className="role-title"><i className="fa-solid fa-user" />Role</span><span className="role-info">Co-founder</span>
                            </li>
                            <li>
                                <span className="role-title"><i className="fa-solid fa-phone" />Phone</span><span className="role-info">+1 123 456 7890</span>
                            </li>
                            <li>
                                <span className="role-title"><i className="fa-solid fa-envelope" />Email</span><span className="role-info">info@johnsteven.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className="chat-media">
                        <div className="chat-media-title">
                            <h6>Shared Media</h6>
                            <span>(3475 items)</span>
                        </div>
                        <div className="media-list">
                            <ul className="nav">
                                <li>
                                    <Link href="#" data-bs-toggle="tab" data-bs-target="#chat-photo" className="active">Photos</Link>
                                </li>
                                <li>
                                    <Link href="#" data-bs-toggle="tab" data-bs-target="#chat-file">File</Link>
                                </li>
                                <li>
                                    <Link href="#" data-bs-toggle="tab" data-bs-target="#chat-vdo">Video</Link>
                                </li>
                                <li>
                                    <Link href="#" data-bs-toggle="tab" data-bs-target="#chat-link">Link</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content pt-0">
                            <div className="tab-pane active" id="chat-photo">
                                <div className="photo-list">
                                    <ul>
                                        <li>
                                            <Image src={service_03} alt="img" />
                                        </li>
                                        <li>
                                            <Image src={service_04} alt="img" />
                                        </li>
                                        <li>
                                            <Image src={service_05} alt="img" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="chat-vdo">
                                <div className="photo-list">
                                    <ul>
                                        <li>
                                            <Image src={service_01} alt="img" />
                                        </li>
                                        <li>
                                            <Image src={service_04} alt="img" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="chat-file">
                                <div className="photo-file">
                                    <ul>
                                        <li>
                                            <i className="feather-file-text me-2" /> admin_v1.0.zip
                                        </li>
                                        <li>
                                            <i className="feather-file-text me-2" /> test.pdf
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="chat-link">
                                <div className="photo-link">
                                    <ul>
                                        <li>
                                            <Link href="#"><i className="feather-link-2 me-2" /> Sed ut perspiciatis</Link>
                                        </li>
                                        <li>
                                            <Link href="#"><i className="feather-link-2 me-2" /> https:example.com</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="chat-notification">
                            <ul>
                                <li>
                                    <p><i className="fa-solid fa-bell" /> Notifications</p>
                                    <div className="status-toggle blue-tog d-flex justify-content-sm-end align-items-center">
                                        <input type="checkbox" id="status_1" className="check" defaultChecked />
                                        <label htmlFor="status_1" className="checktoggle">checkbox</label>
                                    </div>
                                </li>
                                <li>
                                    <p><i className="fa-solid fa-star" /> Add To Favourites</p>
                                    <div className="status-toggle blue-tog d-flex justify-content-sm-end align-items-center">
                                        <input type="checkbox" id="status_2" className="check" defaultChecked />
                                        <label htmlFor="status_2" className="checktoggle">checkbox</label>
                                    </div>
                                </li>
                                <li>
                                    <p><i className="fa-solid fa-volume-xmark" /> Mute</p>
                                    <div className="status-toggle blue-tog d-flex justify-content-sm-end align-items-center">
                                        <input type="checkbox" id="status_3" className="check" />
                                        <label htmlFor="status_3" className="checktoggle">checkbox</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="clear-list">
                            <ul>
                                <li><Link href="#"><Trash2 size={18} /> Clear Chat</Link></li>
                                <li><Link href="#"><ExternalLink size={18} />Export Chat</Link></li>
                                <li><Link href="#"><AlertCircle size={18} />Report Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}