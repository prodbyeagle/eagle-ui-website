import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
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

const withMDX = createMDX({
});

export default withMDX(nextConfig);
