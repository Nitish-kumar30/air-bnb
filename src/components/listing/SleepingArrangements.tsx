import { Room } from "@/lib/types";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function SleepingArrangements({ rooms }: { rooms: Room[] }) {
  return (
    <div id="photos" className="border-b border-black/10 py-6">
      <h2 className="mb-4 text-xl font-semibold">Where you&apos;ll sleep</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {rooms.map((room) => (
          <div
            key={room.name}
            className="overflow-hidden rounded-xl border border-black/10"
          >
            <PlaceholderImage number={room.photoNumber} className="h-52 w-full" />
            <div className="p-4">
              <p className="font-medium">{room.name}</p>
              <p className="text-sm text-black/60">{room.bedInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
