/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'geetork.github.io',
          port: '',
          pathname: '/pet-nftify/**',
        },
      ],   
    },
  }
  
  module.exports = nextConfig