import express from "express";
import cors from "cors";
import router from "./routes";
import { allowedOrigins } from "./utils/constants";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    exposedHeaders: ["Set-Cookie"], // Explicitly expose Set-Cookie
  })
);

// 👇 Fix: match all routes for preflight
app.options(/.*/, cors());

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
