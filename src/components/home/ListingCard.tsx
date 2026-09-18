"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { HomeListing } from "@/lib/homepage-data";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function ListingCard({ listing }: { listing: HomeListing }) {
  const [saved, setSaved] = useState(false);

  return (
    <Link href={`/rooms/${listing.id}`} className="group block">
      <div className="relative mb-3 aspect-square overflow-hidden rounded-xl">
        <PlaceholderImage
          number={listing.photoNumber}
          className="h-full w-full transition-transform duration-300 group-hover:scale-105"
        />

        {listing.isGuestFavourite && (
          <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-semibold shadow">
            Guest favourite
          </span>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            setSaved((s) => !s);
          }}
          className="absolute right-3 top-3"
          aria-label="Save listing"
        >
          <Heart
            size={22}
            className={saved ? "fill-[var(--rausch)] stroke-white" : "fill-black/40 stroke-white"}
            strokeWidth={2}
          />
        </button>

        <button
          onClick={(e) => e.preventDefault()}
          className="absolute left-2 top-1/2 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow group-hover:flex"
          aria-label="Previous photo"
        >
          <ChevronLeft size={14} />
        </button>
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute right-2 top-1/2 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow group-hover:flex"
          aria-label="Next photo"
        >
          <ChevronRight size={14} />
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i === 0 ? "bg-white" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex items-start justify-between gap-2">
        <p className="truncate text-sm font-medium">{listing.location}</p>
        <span className="flex shrink-0 items-center gap-1 text-sm">
          <Star size={12} className="fill-black" />
          {listing.rating.toFixed(2)}
        </span>
      </div>
      <p className="truncate text-sm text-black/60">{listing.title}</p>
      <p className="text-sm text-black/60">{listing.dates}</p>
      <p className="mt-1 text-sm">
        <span className="font-semibold">₹{listing.price.toLocaleString("en-IN")}</span>{" "}
        <span className="text-black/60">night</span>
      </p>
    </Link>
  );
}
