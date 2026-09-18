import Link from "next/link";
import { ArrowLeft, Share, Heart } from "lucide-react";

export default function PhotoTourHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/5"
        >
          <ArrowLeft size={18} />
        </Link>
        <p className="font-medium">Photo tour</p>
        <div className="flex items-center gap-2">
          <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/5">
            <Share size={16} />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/5">
            <Heart size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
