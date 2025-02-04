import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.discordapp.com',
				pathname: '/avatars/**',
			},
			{
				protocol: 'https',
				hostname: 'kappa.lol',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'images.emojiterra.com',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
