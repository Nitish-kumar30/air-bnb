import { PhotoTourSection } from "@/lib/types";
import { slugify } from "@/lib/photo-tour-data";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function PhotoTourThumbnails({
  sections,
}: {
  sections: PhotoTourSection[];
}) {
  return (
    <div className="no-scrollbar mx-auto flex max-w-[1120px] gap-3 overflow-x-auto px-6 py-4">
      {sections.map((s) => (
        <a
          key={s.title}
          href={`#${slugify(s.title)}`}
          className="flex shrink-0 flex-col items-center gap-1"
        >
          <PlaceholderImage
            number={s.photoNumbers[0]}
            className="h-14 w-16 rounded-lg"
          />
          <span className="max-w-16 truncate text-[11px] text-black/70">
            {s.title}
          </span>
        </a>
      ))}
    </div>
  );
}
