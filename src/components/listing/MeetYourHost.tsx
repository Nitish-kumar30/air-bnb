import { MapPin, GraduationCap, Star } from "lucide-react";
import { CoHost, Listing } from "@/lib/types";

function Avatar({ name, initial }: { name: string; initial: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-300 text-sm font-medium">
        {initial}
      </div>
      <span className="text-sm">{name}</span>
    </div>
  );
}

export default function MeetYourHost({ listing }: { listing: Listing }) {
  return (
    <div className="border-b border-black/10 py-6">
      <h2 className="mb-6 text-xl font-semibold">Meet your host</h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-[220px_1fr]">
        <div className="rounded-2xl border border-black/10 p-6 text-center">
          <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-800 text-2xl font-semibold text-white">
            {listing.hostName.charAt(0)}
          </div>
          <p className="text-lg font-semibold">{listing.hostName}</p>
          <p className="text-sm text-black/60">Host</p>
          <div className="mt-4 grid grid-cols-2 divide-x divide-black/10 border-t border-black/10 pt-4 text-center">
            <div>
              <p className="font-semibold">
                {listing.hostReviewCount.toLocaleString("en-IN")}
              </p>
              <p className="text-xs text-black/60">Reviews</p>
            </div>
            <div>
              <p className="flex items-center justify-center gap-1 font-semibold">
                {listing.hostRating.toFixed(2)}
                <Star size={12} className="fill-black" />
              </p>
              <p className="text-xs text-black/60">Rating</p>
            </div>
          </div>
          <p className="mt-4 border-t border-black/10 pt-4 text-sm font-semibold">
            {listing.hostYearsHosting}
          </p>
          <p className="text-xs text-black/60">Years hosting</p>
        </div>

        <div>
          <p className="mb-3 flex items-center gap-2 text-sm">
            <MapPin size={16} />
            {listing.hostBornDecade}
          </p>
          <p className="mb-6 flex items-center gap-2 text-sm">
            <GraduationCap size={16} />
            {listing.hostSchool}
          </p>

          <p className="mb-3 font-medium">Co-Hosts</p>
          <div className="mb-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
            {listing.coHosts.map((c: CoHost) => (
              <Avatar key={c.name} name={c.name} initial={c.avatarInitial} />
            ))}
          </div>

          <p className="mb-2 font-medium">Host details</p>
          <p className="mb-1 text-sm text-black/70">
            Response rate: {listing.hostResponseRate}
          </p>
          <p className="mb-4 text-sm text-black/70">
            {listing.hostResponseTime}
          </p>

          <button className="rounded-lg border border-black px-5 py-3 text-sm font-medium hover:bg-black/5">
            Message host
          </button>
        </div>
      </div>
    </div>
  );
}
