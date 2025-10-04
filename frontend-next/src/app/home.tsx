// app/page.tsx (Server-side rendered listing page)
"use client";
import ApartmentList from "./components/ApartmentList";
import SearchBar from "./components/SearchBar";
import { Apartment } from "@/interfaces";

interface SearchParams {
  search?: string;
  project?: string;
  minRent?: string;
  maxRent?: string;
  bedrooms?: string;
}

export default function HomePage({
  searchParams,
  data,
}: {
  searchParams: SearchParams;
  data: Apartment[];
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white mb-8">
          <h1 className="text-4xl font-bold text-center mb-2">
            🏠 Apartment Listings
          </h1>
          <p className="text-center text-purple-100">Find your perfect home</p>
        </div>

        <SearchBar />

        <ApartmentList searchParams={searchParams} data={data} />
      </div>
    </div>
  );
}
