import { PhotoTourSection } from "./types";

export const photoTourSections: PhotoTourSection[] = [
  {
    title: "Living room 1",
    subtitle: "Sofa · Air conditioning · Ceiling fan · TV",
    photoNumbers: [1, 2, 3],
  },
  {
    title: "Living room 2",
    subtitle: "Ceiling fan · Hot tub",
    photoNumbers: [4, 5, 6, 7],
  },
  {
    title: "Full kitchen",
    subtitle: "Refrigerator · Microwave · Dishes and silverware",
    photoNumbers: [8, 9, 10],
  },
  {
    title: "Bedroom",
    subtitle: "1 double bed · Air conditioning · Wardrobe",
    photoNumbers: [11, 12, 13],
  },
  {
    title: "Full bathroom",
    subtitle: "Bathtub · Hair dryer · Shampoo",
    photoNumbers: [14, 15, 16],
  },
  {
    title: "Gym",
    subtitle: "Exercise equipment",
    photoNumbers: [17, 18, 19],
  },
  {
    title: "Exterior",
    photoNumbers: [20, 21, 22],
  },
  {
    title: "Pool",
    subtitle: "Pool",
    photoNumbers: [23, 24, 25],
  },
  {
    title: "Additional photos",
    photoNumbers: [26],
  },
];

export function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}
