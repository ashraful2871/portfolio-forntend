import { Download } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const cvLink =
    "https://drive.usercontent.google.com/u/0/uc?id=1tizXuiyUe_5kzQYO0KNCPsmSiPbcZrnj&export=view";

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
          href="/skills"
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          SKILLS
        </Link>
      </li>
      <li>
        <Link
          href="/projects"
          className="text-sm font-medium text-[#DAC6A8] hover:text-white"
        >
          PROJECTS
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
          <Link href={cvLink} target="_blank">
            <button className="flex items-center gap-2 bg-[#D2B48C] text-black px-4 py-2 rounded-md font-medium hover:bg-[#C0A276] transition">
              Download CV <Download size={18} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
