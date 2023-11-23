"use client";
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Sidebar from '@/components/dashboard/Sidebar';
import { useEffect } from 'react';

import "./dashboard.css";
import AuthProvider from '@/components/providers/auth/Authprovider';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js")
    }, []);
    return (
        <AuthProvider>
            <div className="h-screen w-screen">
                <div className="main-wrapper h-full w-full">
                    <div className="flex w-full h-full">
                        <Sidebar />
                        <div className="w-full h-full overflow-x-hidden overflow-y-auto flex flex-col">
                            <DashboardHeader />

                            <div className="px-4 py-4">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthProvider>
    )
}
