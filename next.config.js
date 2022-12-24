/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `https://www.year-end-party.site/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
