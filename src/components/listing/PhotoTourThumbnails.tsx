import { PhotoTourSection } from "@/lib/types";
import { slugify } from "@/lib/photo-tour-data";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function PhotoTourThumbnails({
  sections,
}: {
  sections: PhotoTourSection[];
}) {
  return (
    <div className="flex flex-wrap gap-4 pb-16 pt-6">
      {sections.map((s) => (
        <a key={s.title} href={`#${slugify(s.title)}`} className="w-24 shrink-0">
          <PlaceholderImage
            number={s.photoNumbers[0]}
            className="aspect-square w-full rounded-lg"
          />
          <p className="mt-2 text-sm text-black/70">{s.title}</p>
        </a>
      ))}
    </div>
  );
}
