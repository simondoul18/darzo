"use client"
import { avatar_02, avatar_03, avatar_04, avatar_05, avatar_06, avatar_08, avatar_09, avatar_10 } from "@/storage/image";
import Link from "next/link"
import Image from 'next/image';
import { FileText, Home, MessageSquare, PhoneCall, Plus, Search, Users, Video } from "react-feather";
export default function Conversations() {
    return (
        <div className="col-lg-5 col-xl-3 chat-cont-left">
            <div className="card mb-sm-3 mb-md-0 contacts_card flex-fill">
                <div className="chat-header">
                    <div>
                        <h6>Chats</h6>
                        <p>Start New Conversation</p>
                    </div>
                    <Link href="#" className="chat-compose">
                        <Plus size={18} />
                    </Link>
                </div>
                <div className="chat-search">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="search_btn"><Search size={18} /></span>
                        </div>
                        <input type="text" placeholder="Search messages or users" className="form-control search-chat" />
                    </div>
                </div>
                <ul className="chat-list">
                    <li>
                        <Link href="#" className="active"><MessageSquare size={18} /> Chat</Link>
                    </li>
                    <li>
                        <Link href="#"><PhoneCall size={18} /> Call</Link>
                    </li>
                    <li>
                        <Link href="#"><Users size={18} /> Contacts</Link>
                    </li>
                </ul>
                <div className="card-body contacts_body chat-users-list chat-scroll">
                    <div className="chat-header inner-chat-header pt-0">
                        <div>
                            <h6>Favourite</h6>
                        </div>
                        <Link href="#" className="chat-compose">
                            <Plus size={18} />
                        </Link>
                    </div>
                    <Link href="#" className="media d-flex active">
                        <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-online">
                                <Image src={avatar_02} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                        </div>
                        <div className="media-body flex-grow-1">
                            <div>
                                <div className="user-name">John Steven</div>
                                <div className="user-last-chat">Lorem ipsum dolor</div>
                            </div>
                            <div>
                                <div className="last-chat-time">10:12 AM</div>
                            </div>
                        </div>
                    </Link>
                    <Link href="#" className="media d-flex read-chat">
                        <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-online">
                                <Image src={avatar_03} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                        </div>
                        <div className="media-body flex-grow-1">
                            <div>
                                <div className="user-name">John Smith</div>
                                <div className="user-last-chat"><Home size={18} /> Image</div>
                            </div>
                            <div>
                                <div className="last-chat-time">10:19 AM</div>
                                <div className="badge badge-primary badge-pill">2</div>
                            </div>
                        </div>
                    </Link>
                    <Link href="#" className="media d-flex">
                        <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar">
                                <Image src={avatar_04} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                        </div>
                        <div className="media-body flex-grow-1">
                            <div>
                                <div className="user-name">Audrey</div>
                                <div className="user-last-chat"><Video size={18} /> Video</div>
                            </div>
                            <div>
                                <div className="last-chat-time">7:30 PM</div>
                            </div>
                        </div>
                    </Link>
                    <Link href="#" className="media read-chat d-flex">
                        <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-away">
                                <Image src={avatar_06} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                        </div>
                        <div className="media-body flex-grow-1">
                            <div>
                                <div className="user-name">David</div>
                                <div className="user-last-chat"><FileText size={18} />  Document</div>
                            </div>
                            <div>
                                <div className="last-chat-time">6:59 PM</div>
                            </div>
                        </div>
                    </Link>
                    <Link href="#" className="media read-chat d-flex">
                        <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-online">
                                <Image src={avatar_05} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                        </div>
                        <div className="media-body flex-grow-1">
                            <div>
                                <div className="user-name">Ashley</div>
                                <div className="user-last-chat">typing...</div>
                            </div>
                            <div>
                                <div className="last-chat-time">11:21 AM</div>
                            </div>
                        </div>
                    </Link>
                    <div className="chat-header inner-chat-header">
                        <div>
                            <h6>Direct Messages</h6>
                        </div>
                        <Link href="#" className="chat-compose">
                            <i className="feather-plus" />
                        </Link>
                    </div>
                    <Link href="#" className="media d-flex">
                        <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar">
                                <Image src={avatar_09} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                        </div>
                        <div className="media-body flex-grow-1">
                            <div>
                                <div className="user-name">James</div>
                                <div className="user-last-chat">Lorem ipsum dolor</div>
                            </div>
                            <div>
                                <div className="last-chat-time">10:12 AM</div>
                            </div>
                        </div>
                    </Link>
                    <Link href="#" className="media d-flex read-chat">
                        <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar avatar-online">
                                <Image src={avatar_08} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                        </div>
                        <div className="media-body flex-grow-1">
                            <div>
                                <div className="user-name">Sheila</div>
                                <div className="user-last-chat"><Home size={18} /> Image</div>
                            </div>
                            <div>
                                <div className="last-chat-time">10:19 AM</div>
                                <div className="badge badge-primary badge-pill">2</div>
                            </div>
                        </div>
                    </Link>
                    <Link href="#" className="media d-flex">
                        <div className="media-img-wrap flex-shrink-0">
                            <div className="avatar">
                                <Image src={avatar_10} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                        </div>
                        <div className="media-body flex-grow-1">
                            <div>
                                <div className="user-name">Eric</div>
                                <div className="user-last-chat"><Video size={18} /> Video</div>
                            </div>
                            <div>
                                <div className="last-chat-time">7:30 PM</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}