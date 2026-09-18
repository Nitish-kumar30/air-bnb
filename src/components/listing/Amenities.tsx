import { Amenity } from "@/lib/types";
import { Icon } from "@/lib/icon-map";

export default function Amenities({
  amenities,
  totalCount,
}: {
  amenities: Amenity[];
  totalCount: number;
}) {
  return (
    <div id="amenities" className="border-b border-black/10 py-6">
      <h2 className="mb-4 text-xl font-semibold">What this place offers</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {amenities.map((a) => (
          <li
            key={a.label}
            className={`flex items-center gap-4 ${
              a.available ? "" : "text-black/40"
            }`}
          >
            <Icon name={a.icon} size={24} />
            <span className={a.available ? "" : "line-through"}>
              {a.label}
            </span>
          </li>
        ))}
      </ul>
      <button className="mt-6 rounded-lg border border-black px-5 py-3 text-sm font-medium hover:bg-black/5">
        Show all {totalCount} amenities
      </button>
    </div>
  );
}
