/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // Static HTML export
  basePath: "/portfolioharshath1",   // GitHub Pages repo name
  assetPrefix: "/portfolioharshath1/",
  reactStrictMode: true,
  images: {
    unoptimized: true,       // Required for static export
  },
};

module.exports = nextConfig;
