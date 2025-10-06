"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogInIcon, LogOutIcon, MenuIcon, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { signOut } from "next-auth/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Navbar = ({ user }: any) => {
  const links = [
    { href: "/about", label: "ABOUT" },
    { href: "/blog", label: "BLOG" },
    { href: "/dashboard", label: "DASHBOARD" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-black text-white border-b border-[#DAC6A8]/20">
      <div className="max-w-[1320px] mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-[#DAC6A8] text-3xl font-bold">
          Ash
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[#DAC6A8] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Login Button */}
        <div className="hidden lg:flex">
          {!user?.id ? (
            <Link href="/login">
              <Button className="w-full flex items-center justify-center gap-2 bg-[#D2B48C] text-black px-4 py-2 rounded-md font-medium hover:bg-[#C0A276] transition">
                Login <LogInIcon className="w-4 h-4" />
              </Button>
            </Link>
          ) : (
            <Button
              onClick={() => signOut()}
              className="w-full flex items-center justify-center gap-2 bg-[#D2B48C] text-black px-4 py-2 rounded-md font-medium hover:bg-[#C0A276] transition"
            >
              Logout <LogOutIcon className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-[#DAC6A8] hover:text-white hover:bg-transparent"
              >
                <MenuIcon className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-black text-white">
              <SheetHeader className="flex justify-between items-center border-b border-[#DAC6A8]/20 pb-3">
                <SheetTitle className="text-[#DAC6A8] text-2xl font-bold">
                  Ash
                </SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                {links.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-lg font-medium text-[#DAC6A8] hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  {!user?.id ? (
                    <Link href="/login">
                      <Button className="w-full flex items-center justify-center gap-2 bg-[#D2B48C] text-black px-4 py-2 rounded-md font-medium hover:bg-[#C0A276] transition">
                        Login <LogInIcon className="w-4 h-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      onClick={() => signOut()}
                      className="w-full flex items-center justify-center gap-2 bg-[#D2B48C] text-black px-4 py-2 rounded-md font-medium hover:bg-[#C0A276] transition"
                    >
                      Logout <LogOutIcon className="w-4 h-4" />
                    </Button>
                  )}
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
