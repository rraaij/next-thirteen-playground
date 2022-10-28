/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    enableUndici: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        port: "",
        pathname: "/api/character/avatar/**",
      },
    ],
  },
};

module.exports = nextConfig;
