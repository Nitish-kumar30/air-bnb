import { PhotoTourSection as PhotoTourSectionType } from "@/lib/types";
import { slugify } from "@/lib/photo-tour-data";
import PlaceholderImage from "@/components/PlaceholderImage";

// Photos repeat a full-width shot followed by a pair of half-width shots.
function chunk(photoNumbers: number[]) {
  const groups: number[][] = [];
  for (let i = 0; i < photoNumbers.length; i += 3) {
    groups.push(photoNumbers.slice(i, i + 3));
  }
  return groups;
}

export default function PhotoTourSection({
  section,
}: {
  section: PhotoTourSectionType;
}) {
  return (
    <section
      id={slugify(section.title)}
      className="grid grid-cols-1 gap-6 pb-14 sm:grid-cols-2 sm:gap-10"
    >
      <div className="sticky top-[73px] self-start bg-white pb-4 pt-2">
        <h2 className="text-3xl font-semibold">{section.title}</h2>
        {section.subtitle && (
          <p className="mt-1 text-black/60">{section.subtitle}</p>
        )}
      </div>

      <div className="space-y-3">
        {chunk(section.photoNumbers).map((group, i) => {
          const [large, ...pair] = group;
          return (
            <div key={i} className="space-y-3">
              <PlaceholderImage
                number={large}
                className="aspect-[4/3] w-full rounded-lg"
              />
              {pair.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {pair.map((n) => (
                    <PlaceholderImage
                      key={n}
                      number={n}
                      className="aspect-[4/3] w-full rounded-lg"
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
