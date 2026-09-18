import PhotoTourHeader from "@/components/listing/PhotoTourHeader";
import PhotoTourThumbnails from "@/components/listing/PhotoTourThumbnails";
import PhotoTourSection from "@/components/listing/PhotoTourSection";
import { photoTourSections } from "@/lib/photo-tour-data";

export default function PhotoTourPage() {
  return (
    <div className="min-h-screen bg-white">
      <PhotoTourHeader />

      <main className="mx-auto max-w-[1160px] px-6 pb-24">
        <PhotoTourThumbnails sections={photoTourSections} />

        {photoTourSections.map((section) => (
          <PhotoTourSection key={section.title} section={section} />
        ))}
      </main>
    </div>
  );
}
