import { PhotoTourSection as PhotoTourSectionType } from "@/lib/types";
import { slugify } from "@/lib/photo-tour-data";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function PhotoTourSection({
  section,
}: {
  section: PhotoTourSectionType;
}) {
  const [first, ...rest] = section.photoNumbers;

  return (
    <div
      id={slugify(section.title)}
      className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-[160px_1fr]"
    >
      <div>
        <h2 className="text-xl font-semibold">{section.title}</h2>
        {section.subtitle && (
          <p className="mt-1 text-sm text-black/60">{section.subtitle}</p>
        )}
      </div>
      <div className="space-y-3">
        <PlaceholderImage number={first} className="h-72 w-full rounded-xl" />
        {rest.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {rest.map((n) => (
              <PlaceholderImage key={n} number={n} className="h-40 w-full rounded-xl" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
