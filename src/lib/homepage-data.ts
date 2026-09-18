export type HomeListing = {
  id: string;
  title: string;
  location: string;
  dates: string;
  price: number;
  rating: number;
  isGuestFavourite: boolean;
  photoNumber: number;
};

export const homeListings: HomeListing[] = [
  { id: "1", title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10", location: "Candolim, India", dates: "18-23 Oct", price: 28499, rating: 4.95, isGuestFavourite: true, photoNumber: 1 },
  { id: "2", title: "Beautiful flat with a view for life", location: "Panjim, India", dates: "5-10 Nov", price: 42599, rating: 4.95, isGuestFavourite: true, photoNumber: 2 },
  { id: "3", title: "MAQNA - 1bhk with private pool", location: "Calangute, India", dates: "12-17 Nov", price: 142238, rating: 4.95, isGuestFavourite: false, photoNumber: 3 },
  { id: "4", title: "Greenhouse Luxury Flat with plunge pool", location: "Calangute, India", dates: "1-6 Dec", price: 154689, rating: 4.94, isGuestFavourite: true, photoNumber: 4 },
  { id: "5", title: "The Tropical Studio | 5 mins to the beach", location: "Baga, India", dates: "20-25 Oct", price: 152633, rating: 4.99, isGuestFavourite: false, photoNumber: 5 },
  { id: "6", title: "Luxury Casa Bella 1BHK with plunge pool", location: "Calangute, India", dates: "3-8 Nov", price: 159802, rating: 4.94, isGuestFavourite: true, photoNumber: 6 },
  { id: "7", title: "Cozy studio near Anjuna Beach", location: "Anjuna, India", dates: "14-19 Nov", price: 38250, rating: 4.87, isGuestFavourite: false, photoNumber: 7 },
  { id: "8", title: "Heritage villa with private courtyard", location: "Fontainhas, India", dates: "22-27 Oct", price: 68900, rating: 4.92, isGuestFavourite: true, photoNumber: 8 },
  { id: "9", title: "Modern 2BHK with rooftop deck", location: "Assagao, India", dates: "9-14 Dec", price: 95400, rating: 4.9, isGuestFavourite: false, photoNumber: 9 },
  { id: "10", title: "Riverside cottage with hammock garden", location: "Siolim, India", dates: "2-7 Nov", price: 52100, rating: 4.88, isGuestFavourite: false, photoNumber: 10 },
  { id: "11", title: "Beachfront bungalow with sunset view", location: "Morjim, India", dates: "17-22 Nov", price: 118700, rating: 4.97, isGuestFavourite: true, photoNumber: 11 },
  { id: "12", title: "Chic loft in the heart of the city", location: "Panjim, India", dates: "6-11 Dec", price: 47300, rating: 4.85, isGuestFavourite: false, photoNumber: 12 },
];
