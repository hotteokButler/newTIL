import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	logging: {
		fetches: {
			fullUrl: true, // 모든 데이터 fetching logging
		},
	},
};

export default nextConfig;
