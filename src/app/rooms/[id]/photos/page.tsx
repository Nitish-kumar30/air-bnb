import PhotoTourHeader from "@/components/listing/PhotoTourHeader";
import PhotoTourThumbnails from "@/components/listing/PhotoTourThumbnails";
import PhotoTourSection from "@/components/listing/PhotoTourSection";
import SleepingArrangements from "@/components/listing/SleepingArrangements";
import Amenities from "@/components/listing/Amenities";
import AvailabilityCalendar from "@/components/listing/AvailabilityCalendar";
import Reviews from "@/components/listing/Reviews";
import LocationSection from "@/components/listing/LocationSection";
import MeetYourHost from "@/components/listing/MeetYourHost";
import ThingsToKnow from "@/components/listing/ThingsToKnow";
import MoreStaysNearby from "@/components/listing/MoreStaysNearby";
import { listing } from "@/lib/mock-data";
import { photoTourSections } from "@/lib/photo-tour-data";

export default function PhotoTourPage() {
  return (
    <div className="min-h-screen bg-white">
      <PhotoTourHeader roomId={listing.id} />
      <PhotoTourThumbnails sections={photoTourSections} />

      <main className="mx-auto max-w-[1120px] px-6 pb-20">
        <div className="divide-y divide-black/10">
          {photoTourSections.map((section) => (
            <PhotoTourSection key={section.title} section={section} />
          ))}
        </div>

        <button className="mb-6 font-medium underline">Show more</button>

        <SleepingArrangements rooms={listing.rooms} />
        <Amenities
          amenities={listing.amenities}
          totalCount={listing.totalAmenityCount}
        />
        <AvailabilityCalendar
          nights={listing.nights}
          location={listing.location}
          rangeLabel={listing.dateRangeLabel}
        />
        <Reviews
          rating={listing.rating}
          reviewCount={listing.reviewCount}
          categoryRatings={listing.categoryRatings}
          ratingBars={listing.ratingBars}
          highlightTags={listing.highlightTags}
          reviews={listing.reviews}
        />
        <LocationSection
          neighbourhood={listing.neighbourhood}
          highlights={listing.neighbourhoodHighlights}
        />
        <MeetYourHost listing={listing} />
        <ThingsToKnow
          cancellationPolicy={listing.cancellationPolicy}
          houseRules={listing.houseRules}
          safetyItems={listing.safetyItems}
        />
        <MoreStaysNearby stays={listing.nearbyStays} />
      </main>
    </div>
  );
}
