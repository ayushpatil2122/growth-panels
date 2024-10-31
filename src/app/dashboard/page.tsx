import LeftSidebar from "@/components/dashboard/LeftSidebar"
import Header from "@/components/dashboard/Header"
import Table from "@/components/dashboard/Table"
import ChatWidget from "@/components/dashboard/ChatWidget"

export default function() {
  return (
    <div className="flex min-h-screen bg-white">
      <LeftSidebar/>
      <main className="flex-1">
        <Header/>        
        <Table/>
      </main>
      <ChatWidget/>
    </div>
  )
}