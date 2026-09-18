"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { categories } from "@/lib/categories";
import { Icon } from "@/lib/icon-map";

export default function CategoryBar() {
  const [active, setActive] = useState(categories[0].label);

  return (
    <div className="sticky top-[81px] z-30 border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-[1760px] items-center gap-8 px-6 py-4 lg:px-20">
        <nav className="no-scrollbar flex flex-1 gap-8 overflow-x-auto">
          {categories.map((c) => {
            const isActive = active === c.label;
            return (
              <button
                key={c.label}
                onClick={() => setActive(c.label)}
                className={`flex shrink-0 flex-col items-center gap-2 border-b-2 pb-3 pt-1 text-xs font-medium transition-colors ${
                  isActive
                    ? "border-black text-black"
                    : "border-transparent text-black/60 hover:border-black/30 hover:text-black"
                }`}
              >
                <Icon name={c.icon} size={22} strokeWidth={isActive ? 2.2 : 1.8} />
                {c.label}
              </button>
            );
          })}
        </nav>

        <button className="flex shrink-0 items-center gap-2 rounded-xl border border-black/20 px-4 py-3 text-sm font-medium hover:border-black/40">
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>
    </div>
  );
}
