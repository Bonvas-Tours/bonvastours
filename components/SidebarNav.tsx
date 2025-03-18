"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, CalendarClock, Star, HelpCircle, LogOut } from "lucide-react";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import Image from "next/image";
import { clearSessionAndLogout } from "@/app/(client_dashboard)/actions/clear-session";


export function SidebarNav() {
    const pathname = usePathname();

    const navItems = [
        { icon: LayoutDashboard, label: "Dashboard", href: "/client/dashboard" },
        { icon: CalendarClock, label: "Booking History", href: "/client/booking-history" },
        { icon: Star, label: "Reviews", href: "/client/reviews" },
        { icon: HelpCircle, label: "Help & Support", href: "/client/help-support" },
    ];

    return (
        <Sidebar className="fixed h-full flex flex-col transition-all duration-300">
            <SidebarHeader className="flex justify-between items-center py-4 px-3 my-3">
                <Link href="/client/dashboard">
                    <Image src="/logo.png" alt="BonVas Tours" width={80} height={40} className="h-auto" />
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu className="px-3">
                    {navItems.map((item) => (
                        <SidebarMenuItem key={item.href}>
                            <SidebarMenuButton asChild isActive={pathname === item.href || pathname.startsWith(item.href)}>
                                <Link href={item.href} className="flex items-center gap-2 px-3 py-5 text-white rounded-lg hover:bg-primary-100 hover:text-black transition-colors">
                                    <item.icon className="h-5 w-5" />
                                    <span>{item.label}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}

                    {/* Logout Button */}
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <button
                                onClick={async () => {
                                    await clearSessionAndLogout();
                                }}
                                className="flex items-center gap-2 px-3 py-5 text-white rounded-lg hover:bg-primary-100 hover:text-black transition-colors w-full"
                            >
                                <LogOut className="h-5 w-5" />
                                <span>Logout</span>
                            </button>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    );
}
