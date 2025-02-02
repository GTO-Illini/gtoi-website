import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  ...(isProd
    ? { output: "export" }
    : {}
  ),
  images: {
    unoptimized: false,
  },
  // assetPrefix: "./",
  // assetPrefix: "https://gtoi-website.vercel.app/",
  // assetPrefix: "./",
};

export default nextConfig;
