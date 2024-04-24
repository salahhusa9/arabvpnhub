/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/arabvpnhub/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/arabvpnhub' : '',
}

module.exports = nextConfig
