import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  apiUrl: process.env.API_URL || 'http://localhost:3000/products',
};

export default nextConfig;
