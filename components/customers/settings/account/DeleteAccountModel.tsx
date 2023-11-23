"use client";
import Link from 'next/link'

export default function DeleteAccountModel() {
    return (
        <div className="modal fade custom-modal" id="del-account">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-bottom-0 justify-content-between">
                        <h5 className="modal-title">Delete Account</h5>
                        <button
                            type="button"
                            className="close-btn"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <i className="feather-x" />
                        </button>
                    </div>
                    <div className="modal-body pt-0">
                        <div className="write-review">
                            <form action="login.html">
                                <p>
                                    Are you sureyou want to delete This Account? To delete your
                                    account, Type your password.
                                </p>
                                <div className="form-group">
                                    <label className="col-form-label">Password</label>
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
                                    <button type="submit" className="btn btn-danger">
                                        Delete Account
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}