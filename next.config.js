/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["api.lorem.space"],
  },
};

module.exports = nextConfig;
