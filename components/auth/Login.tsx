"use client"
import { fb_svg, google_svg } from "@/storage/image";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import PassportAuthenticationService from "@/services/auth/PassportAuthenticationService";
import ButtonMain from "../global/buttons/ButtonMain";
import { useState } from "react";
import { signIn } from "next-auth/react";



export default function Login() {

    // let router = useRouter();
    let authService = new PassportAuthenticationService;

    let [loginRequestState, setLoginRequestState] = useState(false);
    let [signInWithKapiliCRMRequestState, setSignInWithKapiliCRMRequestState] = useState(false);

    const loginValidation: any = Yup.object().shape({
        username: Yup.string().email('Email is invalid').required('Email is required.'),
        password: Yup.string().min(8).max(32).required('Password is required.'),
    });

    const loginParams = { resolver: yupResolver(loginValidation) };
    const { register, handleSubmit, formState } = useForm(loginParams);
    const { errors } = formState;


    async function loginHandler(e: any) {
        setLoginRequestState(true);
        const loginAttempt = await signIn('credentials', { username: e.username, password: e.password }).then(response => setLoginRequestState(false));
    }

    async function singInWithKapiliCRM() {
        setSignInWithKapiliCRMRequestState(true);
        const loginAttempt = await signIn('kapili-crm').then(response => setSignInWithKapiliCRMRequestState(false));
    }

    return (
        <form onSubmit={handleSubmit(loginHandler)}>
            <div className="log-form">
                <div className="form-group">
                    <label className="col-form-label">E-mail</label>
                    <input type="text" className={`form-control ${errors.username ? 'is-invalid' : ''}`} placeholder="example@email.com" {...register('username')} />
                    {/* @ts-ignore */}
                    <div className="text-red-500 text-sm mt-1">{errors.username?.message}</div>
                </div>
                <div className="form-group">
                    <label className="col-form-label d-block">Password</label>
                    <div className="pass-group">
                        <input type="password" className={`form-control pass-input ${errors.password ? 'is-invalid' : ''}`} {...register('password')} placeholder="*************" />
                    </div>
                    {/* @ts-ignore */}
                    <div className="invalid-feedback">{errors?.password?.message}</div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="char-length">
                            <p>Must be 6 Characters at Least</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-end">
                            <Link className="forgot-link" href="#">Forgot password?</Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label className="custom_check">
                            <input type="checkbox" className="rememberme" />
                            <span className="checkmark" />Remember Me
                        </label>
                    </div>
                    {/* <div className="col-6 text-end">
                        <label className="custom_check">
                            <input type="checkbox" name="loginotp" className="loginotp" />
                            <span className="checkmark" />Login with OTP
                        </label>
                    </div> */}
                </div>
            </div>
            <ButtonMain text="Login" scheme="btn-primary w-100" showLoaderOnRequest={loginRequestState} />
            {/* <ButtonMain text="Login with Kapili CRM" showLoaderOnRequest={signInWithKapiliCRMRequestState} type="button" click={singInWithKapiliCRM} classNames="mt-2" /> */}
            <div className="login-or">
                <span className="or-line" />
                <span className="span-or">Or, Login with your email</span>
            </div>
            <div className="social-login">
                <Link href="#" className="btn btn-google w-100"><Image src={google_svg} className="me-2" alt="img" />Login with Google</Link>
                <Link href="#" className="btn btn-google w-100"><Image src={fb_svg} className="me-2" alt="img" />Login with Facebook</Link>
            </div >
            <p className="no-acc">Don't have an account ?  <Link href="#">Register</Link></p>
        </form >
    )
}