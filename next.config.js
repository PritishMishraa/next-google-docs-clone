const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["ssl.gstatic.com", "imgur.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
});
