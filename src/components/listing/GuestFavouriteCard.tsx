import { Medal, Star } from "lucide-react";
import { Listing } from "@/lib/types";

export default function GuestFavouriteCard({ listing }: { listing: Listing }) {
  if (!listing.isGuestFavourite) return null;

  return (
    <div className="flex items-center justify-between rounded-2xl border border-black/10 p-5">
      <div className="flex items-center gap-3">
        <Medal size={28} strokeWidth={1.5} />
        <div>
          <p className="font-semibold leading-tight">Guest favourite</p>
          <p className="text-sm text-black/70 leading-tight">
            One of the most loved homes on Airbnb, according to guests
          </p>
        </div>
      </div>
      <div className="flex items-center divide-x divide-black/10 text-center">
        <div className="px-4">
          <p className="text-lg font-semibold flex items-center gap-1 justify-center">
            {listing.rating.toFixed(2)}
            <Star size={14} className="fill-black" />
          </p>
        </div>
        <div className="px-4">
          <p className="text-lg font-semibold">{listing.reviewCount}</p>
          <p className="text-xs text-black/60">Reviews</p>
        </div>
      </div>
    </div>
  );
}
