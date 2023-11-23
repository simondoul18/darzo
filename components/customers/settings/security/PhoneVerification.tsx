"use client";
import { useState } from "react";
import { mobile_icon } from "@/storage/image";
import Link from "next/link"
import Image from 'next/image';
import { X } from "react-feather";
export default function PhoneVerification() {
    const [change, setChange] = useState(false);
    return (
        <>
            <div className="linked-item">
                <div className="linked-wrap">
                    <div className="linked-acc">
                        <span className="link-icon">
                            <Image src={mobile_icon} alt="" />
                        </span>
                        <div className="linked-info">
                            <h6>Phone Number Verification</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                        </div>
                    </div>
                    <div className="linked-action">
                        <Link href="#" className="link-close"><i className="fa-solid fa-circle-xmark" /></Link>
                        <Link href="#" data-bs-toggle="modal" data-bs-target="#change-phone" className="btn btn-primary btn-connect" onClick={() => setChange(true)}>Change</Link>
                        <Link href="#" className="btn-acc">Remove</Link>
                    </div>
                </div>
            </div>
            <div className={`modal fade custom-modal ${change === true ? "show d-block" : "d-none"}`} id="change-phone">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content doctor-profile">
                        <div className="modal-header border-bottom-0 justify-content-between">
                            <h5 className="modal-title">Change Phone Number</h5>
                            <button
                                type="button"
                                className="close-btn"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setChange(false)}
                            >
                                <i className="feather-x" ><X size={18} /></i>
                            </button>
                        </div>
                        <div className="modal-body pt-0">
                            <form action="provider-security-settings.html">
                                <div className="wallet-add">
                                    <div className="form-group">
                                        <label className="col-form-label">Current Phone Number</label>
                                        <input
                                            className="form-control form-control-lg group_formcontrol"
                                            id="phone"
                                            name="phone"
                                            type="text"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">
                                            New Phone Number <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            className="form-control form-control-lg group_formcontrol"
                                            id="phone1"
                                            name="phone"
                                            type="text"
                                        />
                                        <p className="brief-bio mb-0 mt-2">
                                            <i className="feather-alert-circle" /> New Phone Number Only
                                            Updated Once You Verified
                                        </p>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Confirm New Password</label>
                                        <div className="pass-group">
                                            <input
                                                type="password"
                                                className="form-control pass-input"
                                                placeholder="*************"
                                            />
                                            <span className="toggle-password feather-eye" />
                                        </div>
                                    </div>
                                    <div className="modal-submit text-end">
                                        <Link
                                            href="#"
                                            className="btn btn-secondary me-2"
                                            data-bs-dismiss="modal"
                                        >
                                            Cancel
                                        </Link>
                                        <button className="btn btn-primary">Change Number</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}