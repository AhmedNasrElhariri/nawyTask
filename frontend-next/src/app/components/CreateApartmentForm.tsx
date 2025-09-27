"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { baseURL } from "@/lib/constants";

interface ApartmentCreateData {
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

export default function CreateApartmentForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    unitName: "",
    unitNumber: "",
    project: "",
    bedrooms: 1,
    bathrooms: 1,
    area: "",
    rent: "",
    description: "",
    imageUrl: "",
    address: "",
    amenities: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Prepare data for submission
      const submitData: ApartmentCreateData = {
        unitName: formData.unitName,
        unitNumber: formData.unitNumber,
        project: formData.project,
        bedrooms: parseInt(formData.bedrooms.toString()),
        bathrooms: parseInt(formData.bathrooms.toString()),
        area: parseFloat(formData.area),
        rent: parseFloat(formData.rent),
        description: formData.description || undefined,
        imageUrl: formData.imageUrl || undefined,
        address: formData.address,
        amenities: formData.amenities
          ? formData.amenities
              .split(",")
              .map((a) => a.trim())
              .filter((a) => a)
          : [],
      };

      // Make API call
      const response = await axios.post(`${baseURL}/apartments`, submitData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = response.data;

      if (!result.success) {
        throw new Error(result.error || "Failed to create apartment");
      }

      if (result.success) {
        setSuccess(true);
        // Redirect to home page after successful creation
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        throw new Error(result.error || "Failed to create apartment");
      }
    } catch (err) {
      const message =
        axios.isAxiosError(err) && err.response?.data?.error
          ? err.response.data.error
          : err instanceof Error
          ? err.message
          : "An error occurred";

      console.error("API Error:", message);
      setError(message);

      alert(message); // browser alert
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="p-8 text-center">
        <div className="mb-4 text-6xl">✅</div>
        <h2 className="text-2xl font-bold text-green-600 mb-2">
          Apartment Added Successfully!
        </h2>
        <p className="text-gray-600 mb-4">
          Redirecting you back to the listings...
        </p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          <div className="flex">
            <div className="flex-shrink-0">❌</div>
            <div className="ml-3">
              <p className="text-sm font-medium">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="unitName"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Unit Name *
          </label>
          <input
            type="text"
            id="unitName"
            name="unitName"
            required
            value={formData.unitName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="e.g., Luxury Studio"
          />
        </div>

        <div>
          <label
            htmlFor="unitNumber"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Unit Number *
          </label>
          <input
            type="text"
            id="unitNumber"
            name="unitNumber"
            required
            value={formData.unitNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="e.g., A101"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="project"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Project Name *
        </label>
        <input
          type="text"
          id="project"
          name="project"
          required
          value={formData.project}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
          placeholder="e.g., Sunset Heights"
        />
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label
            htmlFor="bedrooms"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Bedrooms *
          </label>
          <select
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
          >
            <option value={1}>1 Bedroom</option>
            <option value={2}>2 Bedrooms</option>
            <option value={3}>3 Bedrooms</option>
            <option value={4}>4 Bedrooms</option>
            <option value={5}>5+ Bedrooms</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="bathrooms"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Bathrooms *
          </label>
          <select
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
          >
            <option value={1}>1 Bathroom</option>
            <option value={2}>2 Bathrooms</option>
            <option value={3}>3 Bathrooms</option>
            <option value={4}>4+ Bathrooms</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="area"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Area (sq ft) *
          </label>
          <input
            type="number"
            id="area"
            name="area"
            required
            min="1"
            step="0.1"
            value={formData.area}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="650"
          />
        </div>

        <div>
          <label
            htmlFor="rent"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Monthly Rent ($) *
          </label>
          <input
            type="number"
            id="rent"
            name="rent"
            required
            min="1"
            step="0.01"
            value={formData.rent}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
            placeholder="2500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Address *
        </label>
        <input
          type="text"
          id="address"
          name="address"
          required
          value={formData.address}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
          placeholder="123 Main St, City, State 12345"
        />
      </div>

      <div>
        <label
          htmlFor="imageUrl"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Image URL
        </label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
          placeholder="https://example.com/apartment-image.jpg"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-vertical"
          placeholder="Describe the apartment, its features, and what makes it special..."
        />
      </div>

      <div>
        <label
          htmlFor="amenities"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Amenities (comma-separated)
        </label>
        <input
          type="text"
          id="amenities"
          name="amenities"
          value={formData.amenities}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
          placeholder="Pool, Gym, Parking, Balcony, Air Conditioning"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-medium"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium flex items-center"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Creating...
            </>
          ) : (
            <>➕ Create Apartment</>
          )}
        </button>
      </div>
    </form>
  );
}
