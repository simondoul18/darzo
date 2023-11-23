"use client"
import Link from "next/link"
import Conversations from "@/components/chat/Conversations";
import Messages from "@/components/chat/Messages";
import ChatDetail from "@/components/chat/ChatDetail";
import { ArrowLeft } from "react-feather";
export default function CustomerChat() {
    return (
        <div className="customer-chat">
            <div className="row chat-window">
                <div className="login-back mb-3">
                    <Link href="/customer/dashboard"><ArrowLeft size={18} /> Back</Link>
                </div>
                <Conversations />
                <Messages />
                <ChatDetail />
            </div>
        </div>
    )
}