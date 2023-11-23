"use client"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import './marketplace.css';
import FullScreenDynamicPreloader from '@/components/global/Preloader/FullScreenDynamicPreloader';
import AuthProvider from '@/components/providers/auth/Authprovider';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthProvider>
            <div className="home-page-five">
                <div className="main-wrapper">
                    <Header />

                    {children}

                    <Footer />
                    <FullScreenDynamicPreloader />
                </div>
            </div>
        </AuthProvider>
    )
}
