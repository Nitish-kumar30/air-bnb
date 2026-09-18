"use client";

import Link from "next/link";
import { Menu, Search, User2, Globe } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-[1760px] items-center justify-between gap-4 px-6 py-4 lg:px-20">
        <Link href="/" className="flex items-center gap-2 text-[var(--rausch)]">
          <svg viewBox="0 0 32 32" className="h-8 w-8 fill-current">
            <path d="M16 1c-1.5 0-2.7.9-3.4 2.3C9.8 8.6 4 18.4 4 22.5 4 27.2 8 31 12.7 31c1.9 0 3.6-.7 5-1.8.4-.3.9-.3 1.3 0 1.4 1.1 3.1 1.8 5 1.8C28.7 31 32 27.2 32 22.5c0-4.1-5.8-13.9-8.6-19.2C22.7 1.9 21.5 1 20 1c-1.5 0-2.6.7-3.3 1.9-.2.4-.9.4-1.4 0C14.6 1.7 13.5 1 16 1z" />
          </svg>
          <span className="hidden text-xl font-bold tracking-tight md:block">
            airbnb
          </span>
        </Link>

        <button className="flex flex-1 max-w-md items-center justify-between rounded-full border border-black/10 py-2 pl-6 pr-2 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm font-medium">Anywhere</span>
          <span className="hidden border-l border-black/10 px-4 text-sm font-medium sm:block">
            Anytime
          </span>
          <span className="hidden pl-4 text-sm text-black/50 lg:block">
            Add guests
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--rausch)] text-white">
            <Search size={16} strokeWidth={3} />
          </span>
        </button>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden rounded-full px-4 py-3 text-sm font-medium hover:bg-black/5 md:block"
          >
            Become a host
          </Link>
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5">
            <Globe size={18} />
          </button>
          <button className="flex items-center gap-3 rounded-full border border-black/10 py-2 pl-3 pr-2 hover:shadow-md transition-shadow">
            <Menu size={16} />
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-500 text-white">
              <User2 size={16} />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
