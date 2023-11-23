"use client"
import Login from '@/components/auth/Login'
export default function LoginPage() {
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 mx-auto">
                        <div className="login-wrap">
                            <div className="login-header">
                                <h3>Login</h3>
                                <p>We'll send a confirmation code to your email.</p>
                                {/* <h6>Sign in with <Link href="#">Phone Number</Link></h6> */}
                            </div>
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}