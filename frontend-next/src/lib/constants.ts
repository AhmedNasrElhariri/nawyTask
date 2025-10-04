export const baseURL =
  typeof window === "undefined"
    ? "http://backend:4000/api" // SSR inside Docker network
    : process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
