/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images:{
//   }
// };

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "media.api-sports.io",
      "images.unsplash.com",
      "localhost",
      "j2aligamx.vercel.app",
    ],
  },
});

// module.exports = nextConfig;
