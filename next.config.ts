import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: "res.cloudinary.com",
        pathname: '/dusr5tecd/image/upload/**'
      }
    ]
  }
};

export default nextConfig;
