import Cors from "cors";

export const corsConfig = Cors({
  origin:
    process.env.NODE_ENV === "dev"
      ? "http://localhost:3000"
      : process.env.FRONT_URL,
  credentials: true,
});
