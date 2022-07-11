/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  }
const withImages = require('next-images')

  module.exports = {
    images: {
      domains: ['fanni-jo.herokuapp.com'],
      experimental: {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.vercel.app',
            },
          ],
        },
      },
    },
    withImages(){},
    nextConfig
  }