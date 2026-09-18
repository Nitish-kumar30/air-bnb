import { Listing } from "@/lib/types";

export default function Overview({ listing }: { listing: Listing }) {
  return (
    <div className="border-b border-black/10 pb-6">
      <h2 className="text-xl font-semibold">
        {listing.propertyType} in {listing.location}
      </h2>
      <p className="mt-1 text-black/70">
        {listing.guests} guests · {listing.bedrooms} bedroom · {listing.beds}{" "}
        bed · {listing.bathrooms} bathroom
      </p>
    </div>
  );
}
