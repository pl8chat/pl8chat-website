// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/, // only apply to JS/TS files
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
