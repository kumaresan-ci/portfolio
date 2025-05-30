/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  // assetPrefix: "/portfolio", // This should be removed as per previous instructions
  output: "export", // THIS IS CRUCIAL
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
