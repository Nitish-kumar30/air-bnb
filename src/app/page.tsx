import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryBar from "@/components/home/CategoryBar";
import ListingCard from "@/components/home/ListingCard";
import { homeListings } from "@/lib/homepage-data";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <CategoryBar />

      <main className="mx-auto w-full max-w-[1760px] flex-1 px-6 py-8 lg:px-20">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {homeListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
