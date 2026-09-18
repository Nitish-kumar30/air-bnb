export type Highlight = {
  icon: string;
  title: string;
  description: string;
};

export type Room = {
  name: string;
  bedInfo: string;
  photoNumber: number;
};

export type Amenity = {
  icon: string;
  label: string;
  available: boolean;
};

export type CategoryRating = {
  label: string;
  score: number;
  icon: string;
};

export type RatingBar = {
  stars: number;
  percent: number;
};

export type HighlightTag = {
  icon: string;
  label: string;
  count: number;
};

export type Review = {
  id: string;
  name: string;
  avatarInitial: string;
  timeOnAirbnb: string;
  rating: number;
  date: string;
  text: string;
};

export type CoHost = {
  name: string;
  avatarInitial: string;
};

export type ThingToKnowGroup = {
  icon: string;
  title: string;
  items: string[];
};

export type NearbyStay = {
  id: string;
  title: string;
  price: number;
  rating: number;
  photoNumber: number;
};

export type PhotoTourSection = {
  title: string;
  subtitle?: string;
  photoNumbers: number[];
};

export type Listing = {
  id: string;
  title: string;
  photoCount: number;
  propertyType: string;
  location: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  isGuestFavourite: boolean;
  rating: number;
  reviewCount: number;
  hostName: string;
  hostYearsHosting: number;
  highlights: Highlight[];
  description: string;
  rooms: Room[];
  amenities: Amenity[];
  totalAmenityCount: number;
  pricePerStay: number;
  currency: string;
  nights: number;
  checkIn: string;
  checkOut: string;
  dateRangeLabel: string;
  guestsSelected: number;
  freeCancellationDate: string;
  categoryRatings: CategoryRating[];
  ratingBars: RatingBar[];
  highlightTags: HighlightTag[];
  reviews: Review[];
  neighbourhood: string;
  neighbourhoodHighlights: string;
  hostRating: number;
  hostReviewCount: number;
  hostResponseRate: string;
  hostResponseTime: string;
  hostBornDecade: string;
  hostSchool: string;
  coHosts: CoHost[];
  cancellationPolicy: string;
  houseRules: string[];
  safetyItems: string[];
  nearbyStays: NearbyStay[];
};
