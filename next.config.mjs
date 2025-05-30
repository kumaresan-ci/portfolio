/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  output: "export", // Make sure this is set for static export
  images: {
    unoptimized: true, // Add this line
  },
};

export default nextConfig;
