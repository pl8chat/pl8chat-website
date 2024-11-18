/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
	return [
	  {
		source: '/.well-known/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
	  },
	];
  },
};

export default nextConfig;
