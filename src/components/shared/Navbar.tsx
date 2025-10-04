import { LogInIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link
          href="/about"
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          ABOUT
        </Link>
      </li>

      <li>
        <Link
          href="/blog"
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          BLOG
        </Link>
      </li>
      <li>
        <Link
          href="/dashboard"
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          DASHBOARD
        </Link>
      </li>
    </>
  );
  return (
    <div className="sticky top-0 max-w-[1320px] mx-auto z-40 bg-black px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link href="/" className="text-[#DAC6A8] text-3xl font-bold">
            Ash
          </Link>
        </div>

        <div className="hidden lg:flex space-x-6">
          <ul className="flex space-x-6 text-white font-medium">{links}</ul>
        </div>

        <div>
          <Link href="/login">
            <Button className="flex items-center gap-2 bg-[#D2B48C] text-black px-4 py-2 rounded-md font-medium hover:bg-[#C0A276] transition cursor-pointer">
              Login <LogInIcon className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
