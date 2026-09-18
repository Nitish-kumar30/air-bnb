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
    photoNumbers: [4],
  },
  {
    title: "Full kitchen",
    subtitle: "Refrigerator · Stove · Dishwasher",
    photoNumbers: [5, 6],
  },
  {
    title: "Bedroom",
    subtitle: "1 double bed · Air conditioning",
    photoNumbers: [7, 8],
  },
  {
    title: "Full bathroom",
    subtitle: "Bathtub · Hair dryer",
    photoNumbers: [9, 10],
  },
  {
    title: "Gym",
    subtitle: "Exercise equipment",
    photoNumbers: [11, 12],
  },
  {
    title: "Exterior",
    photoNumbers: [13, 14, 15],
  },
  {
    title: "Pool",
    subtitle: "Pool",
    photoNumbers: [16, 17, 18],
  },
  {
    title: "Additional photos",
    photoNumbers: [19],
  },
];

export function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}
