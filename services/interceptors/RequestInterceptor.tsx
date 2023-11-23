import InterceptorInterface from "@/interfaces/Interceptors/InterceptorInterface";
import axios, { InternalAxiosRequestConfig } from 'axios';
import { getSession } from "next-auth/react";

export default class RequestInterceptor implements InterceptorInterface {
    async intercept() {
        axios.interceptors.request.use(async (request: InternalAxiosRequestConfig<any>) => {
            let session: any = await getSession();
            request.headers['Accept'] = 'application/json';
            request.headers['Content-Type'] = 'application/json';
            request.headers['Access-Control-Allow-Origin'] = '*';
            request.headers['Access-Control-Allow-Methods'] = '*';

            if (session?.accessToken) {
                request.headers['Authorization'] = 'Bearer ' + session?.accessToken;
            }

            return request;
        });
    }
}