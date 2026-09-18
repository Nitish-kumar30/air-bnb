import Navbar from "@/components/Navbar";
import Gallery from "@/components/listing/Gallery";
import TitleBar from "@/components/listing/TitleBar";
import StickyTabs from "@/components/listing/StickyTabs";
import Overview from "@/components/listing/Overview";
import GuestFavouriteCard from "@/components/listing/GuestFavouriteCard";
import HostInfo from "@/components/listing/HostInfo";
import Description from "@/components/listing/Description";
import SleepingArrangements from "@/components/listing/SleepingArrangements";
import Amenities from "@/components/listing/Amenities";
import AvailabilityCalendar from "@/components/listing/AvailabilityCalendar";
import Reviews from "@/components/listing/Reviews";
import LocationSection from "@/components/listing/LocationSection";
import BookingCard from "@/components/listing/BookingCard";
import MeetYourHost from "@/components/listing/MeetYourHost";
import ThingsToKnow from "@/components/listing/ThingsToKnow";
import MoreStaysNearby from "@/components/listing/MoreStaysNearby";
import { listing } from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-[1120px] px-6 pt-6 pb-20">
        <TitleBar title={listing.title} />
        <Gallery count={listing.photoCount} />
      </main>

      <StickyTabs listing={listing} />

      <main className="mx-auto max-w-[1120px] px-6 py-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <Overview listing={listing} />
            <div className="space-y-6 py-6">
              <GuestFavouriteCard listing={listing} />
            </div>
            <HostInfo listing={listing} />
            <Description text={listing.description} />
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
          </div>

          <div className="hidden lg:block">
            <BookingCard listing={listing} />
          </div>
        </div>

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
