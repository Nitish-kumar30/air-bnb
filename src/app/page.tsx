import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="mx-auto max-w-[1120px] px-6 py-20">
        <p className="text-black/60">
          Homepage coming soon — view the{" "}
          <Link href="/rooms/1" className="font-medium underline">
            sample listing page
          </Link>
          .
        </p>
      </main>
    </div>
  );
}
