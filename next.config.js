/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  distDir: "out",
  output: "export",
  images: {
    loader: "custom",
    loaderFile: './imageLoader.js'
  },
}
  
  module.exports = nextConfig