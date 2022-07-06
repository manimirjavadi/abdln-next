/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "localhost",
      "abdln.com",
      "manimirjavadi.info",
      "wp.manimirjavadi.info",
    ],
  },
};

module.exports = nextConfig;
