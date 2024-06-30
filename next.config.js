/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/pet-nftify",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  }
}
  
  module.exports = nextConfig