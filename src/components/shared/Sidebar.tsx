"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, PlusCircle, LogOut, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Sidebar = () => {
  const links = [
    { href: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
    {
      href: "/dashboard/create-blog",
      label: "Create Blog",
      icon: <PlusCircle className="h-4 w-4" />,
    },
    {
      href: "/dashboard/create-project",
      label: "Create Project",
      icon: <PlusCircle className="h-4 w-4" />,
    },
  ];

  return (
    <>
      {/* ✅ Mobile Menu Icon Only */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-[#DAC6A8] hover:text-white hover:bg-transparent bg-black"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          {/* Drawer content */}
          <SheetContent side="left" className="bg-black text-white w-64 p-0">
            <SheetHeader className="p-4 border-b border-gray-700">
              <SheetTitle className="text-[#DAC6A8] text-xl font-semibold">
                Menu
              </SheetTitle>
            </SheetHeader>

            <nav className="flex-1 space-y-2 p-4">
              {links.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            <div className="p-4 border-t border-gray-700">
              <SheetClose asChild>
                <Button
                  variant="destructive"
                  className="w-full justify-start gap-2 cursor-pointer"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* ✅ Desktop Sidebar */}
      <aside className="hidden md:flex h-screen w-64 flex-col border-r border-gray-700 bg-black text-white">
        <nav className="flex-1 space-y-2 p-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <Button
            variant="destructive"
            className="w-full justify-start gap-2 cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
