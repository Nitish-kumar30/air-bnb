import Link from "next/link";
import { Grid3x3 } from "lucide-react";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function Gallery({ count }: { count: number }) {
  return (
    <div className="relative grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl h-[280px] sm:h-[420px]">
      <PlaceholderImage number={1} className="col-span-2 row-span-2 h-full w-full" />
      <PlaceholderImage number={2} className="h-full w-full" />
      <PlaceholderImage number={3} className="h-full w-full" />
      <PlaceholderImage number={4} className="h-full w-full" />
      <PlaceholderImage number={5} className="h-full w-full" />
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
