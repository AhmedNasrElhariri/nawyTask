import axios from "axios";
import { cookies } from "next/headers";
import { baseURL } from "@/lib/constants";
import { Apartment } from "@/interfaces";

export const ApartmentsService = {
  async getAll(
    params?: Record<string, string | number | undefined>
  ): Promise<Apartment[]> {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const res = await axios.get(`${baseURL}/apartments`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
      params, // ✅ attach query params here
      withCredentials: true,
    });

    return res.data?.data ?? res.data;
  },

  async getById(id: string | number): Promise<Apartment> {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const res = await axios.get(`${baseURL}/apartments/${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
      withCredentials: true,
    });

    return res.data?.data ?? res.data;
  },
};
