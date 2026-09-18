"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { NearbyStay } from "@/lib/types";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function MoreStaysNearby({ stays }: { stays: NearbyStay[] }) {
  const [page, setPage] = useState(1);
  const totalPages = 2;

  return (
    <div className="py-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">More stays nearby</h2>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-black/60">
            {page}/{totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="rounded-full border border-black/20 p-1.5 hover:bg-black/5 disabled:opacity-30"
            disabled={page === 1}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="rounded-full border border-black/20 p-1.5 hover:bg-black/5 disabled:opacity-30"
            disabled={page === totalPages}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
        {stays.slice(0, 4).map((s) => (
          <div key={s.id}>
            <PlaceholderImage
              number={s.photoNumber}
              className="mb-2 h-40 w-full rounded-xl"
            />
            <p className="line-clamp-1 text-sm font-medium">{s.title}</p>
            <p className="text-sm text-black/70">
              ₹{s.price.toLocaleString("en-IN")}
            </p>
            <p className="flex items-center gap-1 text-sm text-black/70">
              <Star size={11} className="fill-black" />
              {s.rating.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
