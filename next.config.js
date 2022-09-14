/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/calendar',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
