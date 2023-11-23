"use client"
import Link from "next/link";
export default function EmailVerification() {
    return (
        <form action="/login">
            <div className="form-group">
                <div className="d-flex passcode-wrap digit-group passcode-verified">
                    <input type="text" id="digit-1" name="digit-1" data-next="digit-2" defaultValue={4} maxLength={1} />
                    <input type="text" id="digit-2" name="digit-2" data-next="digit-3" defaultValue={8} data-previous="digit-1" maxLength={1} />
                    <input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" maxLength={1} />
                    <input type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" maxLength={1} />
                </div>
            </div>
            <div className="text-center">
                <div className="time-expiry"><i className="feather-clock me-1" />00:25 secs</div>
            </div>
            <p className="no-acc">Didn't get the OTP? <Link href="#">Resend OTP</Link></p>
            <button className="btn btn-primary w-100 login-btn mb-0" type="submit">Verify &amp; Proceed</button>
        </form>
    )
}