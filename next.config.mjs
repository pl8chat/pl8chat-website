/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
	return [
	  {
		source: '/.well-known/:path*',
		destination: '/public/.well-known/:path*', // Matched parameters can be used in the destination
	  },
	];
  },
};

export default nextConfig;
