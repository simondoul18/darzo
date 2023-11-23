"use client";
import { avatar_02, avatar_03, avatar_05, avatar_07, reply_icon } from "@/storage/image";
import Link from "next/link";
import Image from "next/image";
import { ThumbsDown, ThumbsUp } from "react-feather";

export default function ProductReviews() {
    return (
        <div className="service-wrap">
            <h5>Reviews</h5>
            <ul>
                <li className="review-box">
                    <div className="review-profile">
                        <div className="review-img">
                            <Image
                                src={avatar_02}
                                className="img-fluid"
                                alt="img"
                            />
                            <div className="review-name">
                                <h6>Dennis</h6>
                                <p>a week ago</p>
                            </div>
                        </div>
                        <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqa. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    <div className="recommend-item">
                        <Link href="#">
                            <Image
                                alt="Image"
                                src={reply_icon}
                                className="me-2"
                            />{" "}
                            Reply
                        </Link>
                        <div className="recommend-info">
                            <p>Recommend?</p>
                            <Link href="#">
                                <i className="feather-thumbs-up" ><ThumbsUp size={18} /></i> Yes
                            </Link>
                            <Link href="#">
                                <i className="feather-thumbs-down" ><ThumbsDown size={18} /></i> No
                            </Link>
                        </div>
                    </div>
                </li>
                <li className="review-box">
                    <div className="review-profile">
                        <div className="review-img">
                            <Image
                                src={avatar_03}
                                className="img-fluid"
                                alt="img"
                            />
                            <div className="review-name">
                                <h6>Jaime</h6>
                                <p>yesterday | 10:35AM </p>
                            </div>
                        </div>
                        <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqa. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    <div className="recommend-item">
                        <Link href="#">
                            <Image
                                alt="Image"
                                src={reply_icon}
                                className="me-2"
                            />{" "}
                            Reply
                        </Link>
                        <div className="recommend-info">
                            <p>Recommend?</p>
                            <Link href="#">
                                <i className="feather-thumbs-up" ><ThumbsUp size={18} /></i> Yes
                            </Link>
                            <Link href="#">
                                <i className="feather-thumbs-down" ><ThumbsDown size={18} /></i> No
                            </Link>
                        </div>
                    </div>
                </li>
                <li className="review-box">
                    <div className="review-profile">
                        <div className="review-img">
                            <Image
                                src={avatar_07}
                                className="img-fluid"
                                alt="img"
                            />
                            <div className="review-name">
                                <h6>Martinez</h6>
                                <p>2 days ago | 14:35PM </p>
                            </div>
                        </div>
                        <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqa. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    <div className="recommend-item">
                        <Link href="#">
                            <Image
                                alt="Image"
                                src={reply_icon}
                                className="me-2"
                            />{" "}
                            Reply
                        </Link>
                        <div className="recommend-info">
                            <p>Recommend?</p>
                            <Link href="#">
                                <i className="feather-thumbs-up" ><ThumbsUp size={18} /></i> Yes
                            </Link>
                            <Link href="#">
                                <i className="feather-thumbs-down" ><ThumbsDown size={18} /></i> No
                            </Link>
                        </div>
                    </div>
                    <div className="reply-area">
                        <textarea
                            className="form-control mb-0"
                            rows={3}
                            placeholder="Type your response....."
                            defaultValue={""}
                        />
                    </div>
                </li>
                <li className="review-box">
                    <div className="review-profile">
                        <div className="review-img">
                            <Image
                                src={avatar_05}
                                className="img-fluid"
                                alt="img"
                            />
                            <div className="review-name">
                                <h6>Bradley</h6>
                                <p>1 month ago | 17:35PM </p>
                            </div>
                        </div>
                        <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqa. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    <div className="recommend-item">
                        <Link href="#">
                            <Image
                                alt="Image"
                                src={reply_icon}
                                className="me-2"
                            />{" "}
                            Reply
                        </Link>
                        <div className="recommend-info">
                            <p>Recommend?</p>
                            <Link href="#">
                                <i className="feather-thumbs-up" ><ThumbsUp size={18} /></i> Yes
                            </Link>
                            <Link href="#">
                                <i className="feather-thumbs-down" ><ThumbsDown size={18} /></i> No
                            </Link>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="text-center">
                <Link
                    href="customer-reviews"
                    className="btn btn-primary btn-review"
                >
                    View All Reviews
                </Link>
            </div>
        </div>
    )
}