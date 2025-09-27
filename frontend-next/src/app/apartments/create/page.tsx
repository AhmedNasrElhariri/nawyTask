import CreateApartmentForm from '@/app/components/CreateApartmentForm';
import Link from 'next/link';

export default function CreateApartmentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-4 font-medium"
          >
            ← Back to Listings
          </Link>
          
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">Add New Apartment</h1>
            <p className="text-green-100">Fill in the details to list a new apartment</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-md">
          <CreateApartmentForm />
        </div>
      </div>
    </div>
  );
}