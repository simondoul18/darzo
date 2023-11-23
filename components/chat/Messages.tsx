"use client"
import { avatar_02, provider_01, service_03, service_04 } from "@/storage/image";
import Link from "next/link"
import Image from 'next/image'
import { Download, FileText, Mic, MoreHorizontal, Plus, Search, Trash2, User, Video, Volume2 } from "react-feather";
export default function Messages() {
    return (
        <div className="col-lg-7 col-xl-6 chat-cont-right">
            <div className="card mb-0">
                <div className="card-header msg_head">
                    <div className="d-flex bd-highlight">
                        <Link id="back_user_list" href="#" className="back-user-list">
                            <i className="fas fa-chevron-left" />
                        </Link>
                        <div className="img_cont">
                            <Image className="rounded-circle user_img" src={avatar_02} alt="" />
                        </div>
                        <div className="user_info">
                            <span>John Steven</span>
                            <p className="mb-0 active">Online</p>
                        </div>
                    </div>
                    <div className="chat-options">
                        <ul>
                            <li><Link href="#"><Volume2 size={18} /></Link></li>
                            <li><Link href="#"><Search size={18} /></Link></li>
                            <li><Link href="#"><Video size={18} /></Link></li>
                            <li><Link href="#"><User size={18} /></Link></li>
                            <li><Link href="#" className="with-bg"><MoreHorizontal size={18} /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="card-body msg_card_body chat-scroll pt-0">
                    <ul className="list-unstyled">
                        <li className="chat-date mt-0"><span>Yesterday</span></li>
                        <li className="media received d-flex">
                            <div className="avatar flex-shrink-0">
                                <Image src={avatar_02} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                            <div className="media-body flex-grow-1">
                                <div className="msg-box">
                                    <div>
                                        <ul className="chat-msg-info">
                                            <li>John Steven</li>
                                            <li>
                                                <span className="chat-time">8:55 PM</span>
                                                <div className="drop-item">
                                                    <Link href="#" data-bs-toggle="dropdown" aria-expanded="false" >
                                                        <MoreHorizontal size={18} />
                                                    </Link>
                                                    <div className="dropdown-menu">
                                                        <Link className="dropdown-item" href="#"><Trash2 size={18} /> Delete</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="media sent d-flex">
                            <div className="avatar flex-shrink-0">
                                <Image src={provider_01} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                            <div className="media-body flex-grow-1">
                                <div className="msg-box">
                                    <div>
                                        <ul className="chat-msg-info">
                                            <li>John Smith</li>
                                            <li>
                                                <div className="drop-item">
                                                    <Link href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <MoreHorizontal size={18} />
                                                    </Link>
                                                    <div className="dropdown-menu">
                                                        <Link className="dropdown-item" href="#"><i className="feather-trash-2" /> Delete</Link>
                                                    </div>
                                                </div>
                                                <span className="chat-time">8:55 PM</span>
                                            </li>
                                        </ul>
                                        <p>Sed ut perspiciatis unde omnis iste natus error accusantium doloremque laudantium</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="media received d-flex">
                            <div className="avatar flex-shrink-0">
                                <Image src={avatar_02} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                            <div className="media-body flex-grow-1">
                                <div className="msg-box">
                                    <div>
                                        <ul className="chat-msg-info">
                                            <li>John Steven</li>
                                            <li>
                                                <span className="chat-time">8:55 PM</span>
                                                <div className="drop-item">
                                                    <Link href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <MoreHorizontal size={18} />
                                                    </Link>
                                                    <div className="dropdown-menu">
                                                        <Link className="dropdown-item" href="#"><Trash2 size={18} /> Delete</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="chat-msg-attachments">
                                            <div className="chat-attachment">
                                                <Image src={service_03} alt="Attachment" />
                                                <Link href="#" className="chat-attach-download">
                                                    <i className="fas fa-download" />
                                                </Link>
                                            </div>
                                            <div className="chat-attachment">
                                                <Image src={service_04} alt="Attachment" />
                                                <Link href="#" className="chat-attach-download">
                                                    <i className="fas fa-download" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="media sent d-flex">
                            <div className="avatar flex-shrink-0">
                                <Image src={provider_01} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                            <div className="media-body flex-grow-1">
                                <div className="msg-box">
                                    <div>
                                        <ul className="chat-msg-info">
                                            <li>John Smith</li>
                                            <li>
                                                <div className="drop-item">
                                                    <Link href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <MoreHorizontal size={18} />
                                                    </Link>
                                                    <div className="dropdown-menu">
                                                        <Link className="dropdown-item" href="#"><i className="feather-trash-2" /> Delete</Link>
                                                    </div>
                                                </div>
                                                <span className="chat-time">8:55 PM</span>
                                            </li>
                                        </ul>
                                        <div className="chat-file-attachments">
                                            <div className="chat-file-attach">
                                                <div className="chat-file-icon">
                                                    <FileText size={18} />
                                                </div>
                                                <div className="chat-file-info">
                                                    <h6>admin_v1.0.zip</h6>
                                                    <p>25mb Seprate file</p>
                                                </div>
                                            </div>
                                            <Link href="#" className="chat-file-download">
                                                <Download size={18} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="media received d-flex">
                            <div className="avatar flex-shrink-0">
                                <Image src={avatar_02} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                            <div className="media-body flex-grow-1">
                                <div className="msg-box">
                                    <div>
                                        <ul className="chat-msg-info">
                                            <li>John Steven</li>
                                            <li>
                                                <span className="chat-time">8:55 PM</span>
                                                <div className="drop-item">
                                                    <Link href="#" data-bs-toggle="dropdown" aria-expanded="false" >
                                                        <MoreHorizontal size={18} />
                                                    </Link>
                                                    <div className="dropdown-menu">
                                                        <Link className="dropdown-item" href="#"><Trash2 size={18} /> Delete</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <p>You wait for notice.</p>
                                        <p>Consectetuorem ipsum dolor sit?</p>
                                        <p>Ok?</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="chat-date"><span>Today</span></li>
                        <li className="media sent d-flex">
                            <div className="avatar flex-shrink-0">
                                <Image src={provider_01} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                            <div className="media-body flex-grow-1">
                                <div className="msg-box">
                                    <div>
                                        <ul className="chat-msg-info">
                                            <li>John Smith</li>
                                            <li>
                                                <div className="drop-item">
                                                    <Link href="#" data-bs-toggle="dropdown" aria-expanded="false" >
                                                        <MoreHorizontal size={18} />
                                                    </Link>
                                                    <div className="dropdown-menu">
                                                        <Link className="dropdown-item" href="#"><Trash2 size={18} /> Delete</Link>
                                                    </div>
                                                </div>
                                                <span className="chat-time">8:55 PM</span>
                                            </li>
                                        </ul>
                                        <div className="msg-highlight">
                                            <Link href="#">Sed ut perspiciatis unde omnis iste natus error accusantium doloremque laudantium</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card-footer">
                    <div className="input-group">
                        <div className="btn-file btn">
                            <Plus size={18} />
                            <input type="file" />
                        </div>
                        <input className="form-control type_msg mh-auto empty_check" placeholder="Write your message..." />
                        <div className="send-action">
                            <Link href="#"><i className="fa-solid fa-face-smile" /></Link>
                            <Link href="#"><Mic size={18} /></Link>
                            <button className="btn btn-primary btn_send"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}