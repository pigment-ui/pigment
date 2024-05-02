const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["react-aria", "react-aria-components"],
  },
  images: {
    // cache optimized images for 60 seconds
    minimumCacheTTL: 60,
  },
};

module.exports = withContentlayer(nextConfig);
