export const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

export const PAGE_SIZE = 10;

export const PAYMENT_STATUS = {
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  CANCELED: "CANCELED",
};

export const SUBSCRIPTIONS_ITEM_TYPES = {
  COURSES: "COURSES",
  INDICATORS: "INDICATORS",
  BOOKS: "BOOKS",
  NEWS_CATEGORY: "NEWS_CATEGORY",
  SIGNALS_CATEGORY: "SIGNALS_CATEGORY",
};

export const ADMINS_TYPES = {
  ADMIN: "Admin",
  SUPERADMIN: "SuperAdmin",
  MEMBER: "Member",
};

export const MODEL_TYPES = {
  REGISTRATION: "Registration",
  SUBSCRIPTION: "Subscription",
  COURSE: "Course",
};

export const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:3000",
  "http://localhost:3001",
  "https://motaalem-website.vercel.app",
];

export const ACCESS_TYPES = {
  SUBSCRIPTION: "subscription",
  COURSE: "course",
  LESSON: "lesson",
};
