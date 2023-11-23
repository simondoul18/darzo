"use client";

import { Eye } from "react-feather";

export default function ResetPassword() {
    return (
        <form action="/success">
            <div className="log-form">
                <div className="form-group">
                    <label className="col-form-label">New Password</label>
                    <div className="pass-group" id="passwordInput">
                        <input type="password" className="form-control pass-input" placeholder="*************" />
                        <span className="toggle-password feather-eye" ><Eye size={18} /></span>
                    </div>
                    {/* <div className="password-strength" id="passwordStrength">
                        <span id="poor" />
                        <span id="weak" />
                        <span id="strong" />
                        <span id="heavy" />
                    </div>
                    <div id="passwordInfo">Use 8 or more characters with a mix of letters, numbers &amp; symbols.</div> */}
                </div>
                <div className="form-group">
                    <label className="col-form-label">Confirm Password</label>
                    <div className="pass-group">
                        <input type="password" className="form-control pass-input" placeholder="*************" />
                        <span className="toggle-password feather-eye" ><Eye size={18} /></span>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary w-100 login-btn" type="submit">Save Change</button>
        </form>
    )
}