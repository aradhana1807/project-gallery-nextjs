import Link from "next/link";
import React from "react";
import { Code, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white/50 backdrop-blur-xl z-30 p-4  dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="hidden md:inline-flex">
          <h1 className="text-3xl font-bold">Project Gallery</h1>
        </Link>

        <Link href="/" className="md:hidden flex items-center gap-2 font-bold">
          <Code size={32} /> Gallery
        </Link>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="https://github.com/aradhana1807">
            <GithubLogo
              className="cursor-pointer transform hover:scale-125 transition duration-300 hover:text-emerald-500"
              size={32}
            />
          </Link>

          <Link href="https://www.linkedin.com/in/aradhana-nayak-607959212">
            <LinkedinLogo
              className="cursor-pointer transform hover:scale-125 transition duration-300 hover:text-blue-500"
              size={32}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
