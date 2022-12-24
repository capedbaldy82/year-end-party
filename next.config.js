/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://www.year-end-party.site/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
