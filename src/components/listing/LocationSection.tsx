import { Home, Minus, Plus, SearchIcon } from "lucide-react";

export default function LocationSection({
  neighbourhood,
  highlights,
}: {
  neighbourhood: string;
  highlights: string[];
}) {
  return (
    <div id="location" className="py-6">
      <h2 className="mb-1 text-xl font-semibold">Where you&apos;ll be</h2>
      <p className="mb-6 text-black/70">{neighbourhood}</p>

      <div className="relative mb-6 h-[380px] w-full overflow-hidden rounded-xl bg-[#e9f0e3]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #cfe3f7 0%, #cfe3f7 45%, #e9f0e3 45%, #e9f0e3 100%)",
          }}
        />
        <div className="absolute left-[30%] top-[35%] h-40 w-40 rounded-full bg-[#d7e8d0]" />
        <div className="absolute right-[15%] top-[45%] h-44 w-44 rounded-full bg-[#d7e8d0]" />
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg">
          <Home size={20} />
        </div>
        <button className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow">
          <SearchIcon size={16} />
        </button>
        <div className="absolute right-4 top-4 flex flex-col overflow-hidden rounded-lg bg-white shadow">
          <button className="flex h-9 w-9 items-center justify-center border-b border-black/10">
            <Plus size={16} />
          </button>
          <button className="flex h-9 w-9 items-center justify-center">
            <Minus size={16} />
          </button>
        </div>
      </div>

      <p className="mb-6 text-black/70">
        Exact location will be provided after booking.
      </p>

      <h3 className="mb-3 text-lg font-semibold">Neighbourhood highlights</h3>
      <ul className="list-disc space-y-2 pl-5 text-black/70">
        {highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>
  );
}
