import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", `${process.env.NEXT_PUBLIC_BACKEND_URL!}`],
  },
};

export default nextConfig;
