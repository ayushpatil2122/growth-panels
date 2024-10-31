import { Search } from "lucide-react";
import { Input } from "../ui/input";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Settings, LogOut } from 'lucide-react'
import { UserButton } from "@clerk/nextjs"

export default function Header() {
    return <>
        <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-semibold">Inbox</h1>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search here..."
                className="w-[240px] pl-9 py-2 bg-gray-50 border-gray-200"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <UserButton/>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
    </>
}