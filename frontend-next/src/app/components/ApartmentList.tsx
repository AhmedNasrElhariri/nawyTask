import { Apartment } from "@/interfaces";
import ApartmentCard from "./ApartmentCard";

interface SearchParams {
  search?: string;
  project?: string;
  minRent?: string;
  maxRent?: string;
  bedrooms?: string;
}

export default  function ApartmentList({
  data,
}: {
  searchParams: SearchParams;
  data: Apartment[];
}) {

  if (data.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">
          No apartments found matching your criteria.
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
}
