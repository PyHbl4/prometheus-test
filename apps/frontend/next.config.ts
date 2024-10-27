import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  apiUrl: process.env.API_URL || 'http://80.87.110.203:3200',
};

export default nextConfig;
