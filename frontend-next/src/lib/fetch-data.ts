import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { baseURL } from "./constants";

export const getData = async <T = any>(
  url: string,
  options?: AxiosRequestConfig
): Promise<{ data: T }> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await axios.get(`${baseURL}/${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      ...(options?.headers || {}),
    },
    ...options,
    withCredentials: true,
  });

  const response = res.data;

  return {
    data: response.data || response,
  };
};
