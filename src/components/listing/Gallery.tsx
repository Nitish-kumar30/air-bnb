import Link from "next/link";
import { Grid3x3 } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";

const TILES = [
  { number: 1, className: "col-span-2 row-span-2" },
  { number: 2, className: "" },
  { number: 3, className: "" },
  { number: 4, className: "" },
  { number: 5, className: "" },
];

export default function Gallery({ count }: { count: number }) {
  return (
    <div className="relative grid h-[280px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl sm:h-[420px]">
      {TILES.map((tile) => (
        <Link
          key={tile.number}
          href="/photos"
          className={`group relative ${tile.className}`}
        >
          <PlaceholderImage
            number={tile.number}
            className="h-full w-full transition-[filter] group-hover:brightness-90"
          />
        </Link>
      ))}
      {count > 5 && (
        <Link
          href="/photos"
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium shadow-md hover:bg-neutral-100"
        >
          <Grid3x3 size={16} />
          Show all photos
        </Link>
      )}
    </div>
  );
}
