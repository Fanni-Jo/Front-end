/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  }
const withImages = require('next-images')

  module.exports = {
    images: {
      domains: ['fanni-jo.herokuapp.com'],
    },
    withImages(){},
    nextConfig
  }