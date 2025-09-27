export interface Apartment {
  id: number;
  unitName: string;
  unitNumber: string;
  project: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in square feet or meters
  rent: number;
  description?: string;
  imageUrl?: string;
  address: string;
  amenities: string[]; // Array of amenities
  available: boolean;
  createdAt: string; // ISO date string (from Prisma/DB)
  updatedAt: string; // ISO date string
}
