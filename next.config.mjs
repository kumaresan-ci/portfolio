/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // your GitHub repo name
  assetPrefix: '/portfolio', // required to fix public path issues
  images: {
    unoptimized: true, // disables Image Optimization (required for static export)
  },
};

export default nextConfig;