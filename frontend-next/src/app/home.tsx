// app/page.tsx (Server-side rendered listing page)
"use client";
import { Suspense } from "react";
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

function ApartmentListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
        >
          <div className="h-48 bg-gray-300"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 bg-gray-300 rounded mb-4 w-2/3"></div>
            <div className="flex space-x-4 mb-4">
              <div className="h-3 bg-gray-300 rounded w-16"></div>
              <div className="h-3 bg-gray-300 rounded w-16"></div>
              <div className="h-3 bg-gray-300 rounded w-20"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded w-24"></div>
          </div>
        </div>
      ))}
    </div>
  );
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
