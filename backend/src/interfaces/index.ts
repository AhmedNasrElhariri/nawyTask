export interface ApartmentCreateData {
  unitName: string;
  unitNumber: string;
  project: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  rent: number;
  description?: string;
  imageUrl?: string;
  address: string;
  amenities?: string[];
}