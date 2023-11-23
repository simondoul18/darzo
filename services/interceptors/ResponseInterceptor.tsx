"use client";
import InterceptorInterface from "@/interfaces/Interceptors/InterceptorInterface";
import axios, { AxiosResponse } from 'axios';
import Auth from "../auth/Auth";

export default class ResponseInterceptor implements InterceptorInterface {
    intercept() {
        let auth = new Auth;
        axios.interceptors.response.use((response: AxiosResponse<any>) => {
            return response;
        }, (err: any) => {
            if (err?.response?.status == 401) {
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('_token');
                    auth.redirectToLoginPage();
                }

                //Nav to Auth screen
            }
            return Promise.reject(err)
        })
    }
}