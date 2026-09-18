import { ChevronDown, Tag } from "lucide-react";
import { Listing } from "@/lib/types";

export default function BookingCard({ listing }: { listing: Listing }) {
  return (
    <div className="sticky top-[110px] rounded-2xl">
      <div className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-black/10 p-4">
        <div className="flex items-center gap-3">
          <Tag size={20} />
          <div className="text-sm">
            <p className="font-medium">Get 10% off your next stay.</p>
            <button className="underline">Terms apply</button>
          </div>
        </div>
        <button className="whitespace-nowrap rounded-lg border border-black px-4 py-2 text-sm font-medium hover:bg-black/5">
          Claim
        </button>
      </div>

      <div className="rounded-2xl border border-black/10 p-6 shadow-sm">
        <p className="mb-4 text-xl">
          <span className="font-semibold underline">
            {listing.currency}
            {listing.pricePerStay.toLocaleString("en-IN")}
          </span>{" "}
          <span className="text-base font-normal">for {listing.nights} nights</span>
        </p>

        <div className="overflow-hidden rounded-lg border border-black/20">
          <div className="grid grid-cols-2">
            <div className="border-r border-b border-black/20 p-3">
              <p className="text-[10px] font-semibold tracking-wide">
                CHECK-IN
              </p>
              <p className="text-sm">{listing.checkIn}</p>
            </div>
            <div className="border-b border-black/20 p-3">
              <p className="text-[10px] font-semibold tracking-wide">
                CHECKOUT
              </p>
              <p className="text-sm">{listing.checkOut}</p>
            </div>
          </div>
          <button className="flex w-full items-center justify-between p-3 text-left">
            <div>
              <p className="text-[10px] font-semibold tracking-wide">
                GUESTS
              </p>
              <p className="text-sm">{listing.guestsSelected} guests</p>
            </div>
            <ChevronDown size={16} />
          </button>
        </div>

        <div className="my-4 rounded-lg bg-neutral-100 px-4 py-3 text-center text-sm font-medium">
          Free cancellation before{" "}
          <span className="font-semibold">{listing.freeCancellationDate}</span>
        </div>

        <button className="w-full rounded-lg bg-[var(--rausch)] py-3.5 text-base font-semibold text-white hover:brightness-95">
          Reserve
        </button>

        <p className="mt-3 text-center text-sm text-black/60">
          You won&apos;t be charged yet
        </p>
      </div>

      <button className="mt-4 text-sm font-medium underline text-black/70">
        Report this listing
      </button>
    </div>
  );
}
