import { Listing } from "@/lib/types";
import { Icon } from "@/lib/icon-map";

export default function HostInfo({ listing }: { listing: Listing }) {
  return (
    <div className="border-b border-black/10 py-6">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-800 text-lg font-semibold text-white">
          {listing.hostName.charAt(0)}
        </div>
        <div>
          <p className="font-semibold">Hosted by {listing.hostName}</p>
          <p className="text-sm text-black/60">
            {listing.hostYearsHosting} years hosting
          </p>
        </div>
      </div>

      <ul className="space-y-5">
        {listing.highlights.map((h) => (
          <li key={h.title} className="flex items-start gap-4">
            <Icon name={h.icon} size={26} className="mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">{h.title}</p>
              <p className="text-sm text-black/60">{h.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
