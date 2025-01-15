import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required if you're using Next.js' Image component on GitHub Pages
  },
};

export default nextConfig;
