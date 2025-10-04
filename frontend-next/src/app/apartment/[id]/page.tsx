import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ApartmentsService } from "@/services/apartments.service";

export default async function ApartmentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = await params.id;
  const apartment = await ApartmentsService.getById(id);

  if (!apartment) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6 font-medium"
        >
          ← Back to Listings
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            {apartment.imageUrl ? (
              <Image
                src={apartment.imageUrl}
                alt={apartment.unitName}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-6xl">🏠</span>
              </div>
            )}
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {apartment.unitName}
              </h1>
              <p className="text-xl text-purple-600 font-semibold">
                {apartment.project} • Unit #{apartment.unitNumber}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-600">
              <span className="flex items-center text-lg">
                🛏️ {apartment.bedrooms} bedrooms
              </span>
              <span className="flex items-center text-lg">
                🚿 {apartment.bathrooms} bathrooms
              </span>
              <span className="flex items-center text-lg">
                📐 {apartment.area} sq ft
              </span>
            </div>

            <div className="text-3xl font-bold text-gray-900 mb-6">
              ${apartment.rent.toLocaleString("en-US")}/month
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                📍 Address
              </h2>
              <p className="text-gray-700">{apartment.address}</p>
            </div>

            {apartment.description && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {apartment.description}
                </p>
              </div>
            )}

            {apartment.amenities.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  ✨ Amenities
                </h2>
                <div className="flex flex-wrap gap-2">
                  {apartment.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
