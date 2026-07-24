import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow local network IP access
  allowedDevOrigins: ['192.168.65.165', 'localhost:3000'],
};

export default nextConfig;