"use client"
import { useEffect } from 'react';

import CustomerSidebar from "@/components/customers/CustomerSidebar"
import { usePathname } from 'next/navigation';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const currentPath = usePathname();
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <div className="content">
            <div className="container">
                {currentPath !== '/customer/chat' ? (
                    <div className="row">
                        <CustomerSidebar />
                        {children}
                    </div>
                ) : (
                    <>{children}</>
                )}
            </div>
        </div>
    )
}
