import Link from "next/link";
export default function ForgotPassword() {
    return (
        <form action="/reset-password">
            <div className="log-form">
                <div className="form-group">
                    <label className="col-form-label">E-mail</label>
                    <input type="text" className="form-control" placeholder="example@email.com" />
                </div>
            </div>
            <button className="btn btn-primary w-100 login-btn" type="submit">Submit</button>
            <div className="social-login">
                <Link href="/login" className="btn btn-secondary w-100 fw-bold">Back</Link>
            </div>
        </form>
    )
}