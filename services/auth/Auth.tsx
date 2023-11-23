"use client"
import { getSession, signOut } from 'next-auth/react';

export default class Auth {

    constructor() { }

    // private router: any = useRouter();


    status() {
        if (typeof window !== 'undefined' && localStorage.getItem('_token')) {
            return true;
        }

        return false;
    }

    redirectToLoginPage() {
        window.location.href = '/login';
    }

    async redirectForCustomer() {
        let session = await getSession();
        console.log(session?.user);
    }

    signOut() {
        signOut();
    }
}