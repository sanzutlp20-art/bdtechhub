// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Turbopack-এর সাথে কোনো webpack প্লাগিন না থাকলে এটা যথেষ্ট
};

export default nextConfig;