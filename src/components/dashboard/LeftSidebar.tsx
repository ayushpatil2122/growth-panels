import { Grid, Heart, Menu, PenTool, PlayCircle, Settings, Users } from "lucide-react";
import Link from "next/link";

export default function LeftSidebar() {
    return <>
        <aside className="w-16 border-r border-gray-200 bg-white flex flex-col items-center py-4 space-y-6">
            <nav className="space-y-6">
              <Link href="/menu" className="block">
                <Menu className="w-6 h-6 text-gray-400" />
              </Link>
              <Link href="/" className="block">
                <Grid className="w-6 h-6 text-[#6366F1]" />
              </Link>
              <Link href="/favorites" className="block">
                <Heart className="w-6 h-6 text-gray-400" />
              </Link>
              <Link href="/users" className="block">
                <Users className="w-6 h-6 text-gray-400" />
              </Link>
              <Link href="/edit" className="block">
                <PenTool className="w-6 h-6 text-gray-400" />
              </Link>
              <Link href="/play" className="block">
                <PlayCircle className="w-6 h-6 text-gray-400" />
              </Link>
              <Link href="/settings" className="block">
                <Settings className="w-6 h-6 text-gray-400" />
              </Link>
            </nav>
        </aside>
    </>
}