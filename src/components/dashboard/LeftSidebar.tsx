import { Grid, Heart, Menu, PenTool, PlayCircle, Settings, Users } from "lucide-react";
import Link from "next/link";

export default function LeftSidebar() {
    return <>
        <aside className="w-16 border-r border-gray-200 bg-white flex flex-col items-center py-4 space-y-6">
            <nav className="space-y-6">
              <div className="block">
                <Menu className="w-6 h-6 text-gray-400" />
              </div>
              <Link href="/dashboard" className="block">
                <Grid className="w-6 h-6 text-[#6366F1]" />
              </Link>
              <Link href="/dashboard/panels" className="block">
                <Users className="w-6 h-6 text-gray-400" />
              </Link>
              <Link href='/dashboard/setting' className="block">
                <Settings className="w-6 h-6 text-gray-400"/>
              </Link>
            </nav>
        </aside>
    </>
}