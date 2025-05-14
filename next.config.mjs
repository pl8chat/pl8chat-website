/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    templateID: 'template_r2u48ea',
    serviceID: 'service_xy0ogsj',
    publicKey: 'FKhKWeOTif_yR4NGG',
  },

  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/public/.well-known/:path*',
      },
    ];
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
