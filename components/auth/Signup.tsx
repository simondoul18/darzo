import { fb_svg, google_svg } from "@/storage/image";
import Link from 'next/link'
import Image from 'next/image'
import { Eye } from "react-feather";
export default function Signup() {
    return (
        <form action="/">
            <div className="form-group">
                <label className="col-form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
            </div>
            <div className="form-group">
                <label className="col-form-label">E-mail</label>
                <input type="email" className="form-control" placeholder="example@email.com" />
            </div>
            <div className="row">
                <div className="col-md-12">
                    <label className="col-form-label">Phone Number</label>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg group_formcontrol" id="phone" name="phone" placeholder="(256) 789-6253" />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label className="col-form-label d-block">Password<span className="brief-bio float-end">Must be 8 Characters at Least</span></label>
                <div className="pass-group">
                    <input type="password" className="form-control pass-input" placeholder="*************" />
                    <span className="toggle-password feather-eye" ><Eye size={18} /></span>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label className="custom_check">
                        <input type="checkbox" name="rememberme" className="rememberme" />
                        <span className="checkmark" />Remember Me
                    </label>
                </div>
                <div className="col-6 text-end">
                    <label className="custom_check">
                        <input type="checkbox" name="loginotp" className="loginotp" />
                        <span className="checkmark" />Login with OTP
                    </label>
                </div>
            </div>
            <button className="btn btn-primary w-100 login-btn" type="submit">Signup</button>
            <div className="login-or">
                <span className="or-line" />
                <span className="span-or">Or, log in with your email</span>
            </div>
            <div className="social-login">
                <Link href="#" className="btn btn-google w-100"><Image src={google_svg} className="me-2" alt="img" />Log in with Google</Link>
                <Link href="#" className="btn btn-google w-100"><Image src={fb_svg} className="me-2" alt="img" />Log in with Facebook</Link>
            </div>
            <p className="no-acc">Already have an account <Link href="/login">Sign in</Link></p>
        </form>
    )
}