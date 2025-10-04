import { getData } from "@/lib/fetch-data";
import HomePageView from "./home";
import { Apartment } from "@/interfaces";
import { ApartmentsService } from "@/services/apartments.service";

interface SearchParams {
  search?: string;
  project?: string;
  minRent?: string;
  maxRent?: string;
  bedrooms?: string;
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchPa = await searchParams;
  const filters = {
    search: searchPa.search || "",
    project: searchPa.project || "",
    bedrooms: searchPa.bedrooms,
  };

  const apartments = await ApartmentsService.getAll(filters);

  return <HomePageView data={apartments} searchParams={searchPa} />;
}
