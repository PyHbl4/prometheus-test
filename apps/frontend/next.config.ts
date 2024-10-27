import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  apiUrl: process.env.API_URL || 'http://localhost:3200/products',
};

export default nextConfig;
