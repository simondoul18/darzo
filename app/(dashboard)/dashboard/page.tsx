"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Dashboard() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login?callbackUrl=/dashboard');
        }
    });

    return (
        <div className="text-red-500">
            Dashboard
        </div>
    )
}