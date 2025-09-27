import { getData } from "@/lib/fetch-data";
import HomePageView from "./home";
import { Apartment } from "@/interfaces";

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

  const queryParams = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) queryParams.append(key, value);
  });

  const queryString = queryParams.toString();
  const endpoint = queryString ? `apartments/?${queryString}` : "apartments";

  const { data: apartments } = await getData<Apartment[]>(endpoint);

  return <HomePageView data={apartments} searchParams={searchPa} />;
}
