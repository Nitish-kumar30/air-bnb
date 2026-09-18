"use client";

import { Star } from "lucide-react";
import { Listing } from "@/lib/types";

const TABS = ["Photos", "Amenities", "Reviews", "Location"];

export default function StickyTabs({ listing }: { listing: Listing }) {
  return (
    <div className="sticky top-[81px] z-40 border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between py-5">
        <nav className="flex gap-8">
          {TABS.map((tab, i) => (
            <a
              key={tab}
              href={`#${tab.toLowerCase()}`}
              className={`text-sm font-medium pb-1 ${
                i === 0
                  ? "border-b-2 border-black text-black"
                  : "text-black/70 hover:text-black"
              }`}
            >
              {tab}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 sm:flex">
          <div className="text-sm">
            <span className="font-semibold underline">
              {listing.currency}
              {listing.pricePerStay.toLocaleString("en-IN")}
            </span>{" "}
            for {listing.nights} nights
            <span className="mx-2 text-black/30">·</span>
            <span className="inline-flex items-center gap-1">
              <Star size={12} className="fill-black" />
              {listing.rating.toFixed(2)} · {listing.reviewCount} reviews
            </span>
          </div>
          <button className="rounded-lg bg-[var(--rausch)] px-6 py-3 text-sm font-semibold text-white hover:brightness-95">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
