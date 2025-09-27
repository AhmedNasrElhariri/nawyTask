'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Apartment {
  id: number;
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
  amenities: string[];
}

export default function ApartmentCard({ apartment }: { apartment: Apartment }) {
  return (
    <Link href={`/apartment/${apartment.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-48">
          {apartment.imageUrl ? (
            <Image
              src={apartment.imageUrl}
              alt={apartment.unitName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-500 text-4xl">🏠</span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
            {apartment.unitName}
          </h3>
          
          <p className="text-purple-600 font-medium mb-3">
            {apartment.project} • #{apartment.unitNumber}
          </p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <span className="flex items-center">
              🛏️ {apartment.bedrooms} bed
            </span>
            <span className="flex items-center">
              🚿 {apartment.bathrooms} bath
            </span>
            <span className="flex items-center">
              📐 {apartment.area} sq ft
            </span>
          </div>
          
          <div className="text-xl font-bold text-gray-900">
            ${apartment.rent.toLocaleString("en-US")}/month
          </div>
        </div>
      </div>
    </Link>
  );
}
