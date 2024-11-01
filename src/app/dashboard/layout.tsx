import { ReactNode } from "react";
import LeftSidebar from "@/components/dashboard/LeftSidebar"
import Header from "@/components/dashboard/Header"
import ChatWidget from "@/components/dashboard/ChatWidget"

export default function DashboardLayout({ children } : {
    children : ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-white">
            <LeftSidebar/>
            <main className="flex-1">
                <Header/>        
                {children}
            </main>
            <ChatWidget/>
        </div>
    )
}