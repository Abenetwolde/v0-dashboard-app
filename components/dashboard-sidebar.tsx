"use client"

import { Shield, FileText, Bell, LayoutDashboard } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "#",
  },
  {
    title: "Admin Management",
    icon: Shield,
    href: "#admin",
  },
  {
    title: "Rules",
    icon: FileText,
    href: "#rules",
  },
  {
    title: "Alerts",
    icon: Bell,
    href: "#alerts",
  },
]

export function DashboardSidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard")

  return (
    <aside className="fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] w-64 border-r border-border bg-sidebar">
      <nav className="flex flex-col gap-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.title

          return (
            <a
              key={item.title}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                setActiveItem(item.title)
              }}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              {item.title}
            </a>
          )
        })}
      </nav>
    </aside>
  )
}
