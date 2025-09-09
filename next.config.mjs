// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    globalNotFound: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/ios',
        destination: 'https://apps.apple.com/us/app/pl8chat/id6474788258?platform=iphone',
        permanent: false,
      },
      {
        source: '/android',
        destination: 'https://play.google.com/store/apps/details?id=com.pl8chat.app&pcampaignid=web_share',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
