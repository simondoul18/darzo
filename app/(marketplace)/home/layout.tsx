"use client"
import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import { useEffect } from "react";


export default function MarketplaceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="hero-section-five">
            {children}
        </div>
    )
}
