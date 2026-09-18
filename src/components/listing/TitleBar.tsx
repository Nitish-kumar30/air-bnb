import { Share, Heart } from "lucide-react";

export default function TitleBar({ title }: { title: string }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium underline hover:bg-black/5">
          <Share size={16} />
          Share
        </button>
        <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium underline hover:bg-black/5">
          <Heart size={16} />
          Save
        </button>
      </div>
    </div>
  );
}
