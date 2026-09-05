import type { NextConfig } from 'next'
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
	reactStrictMode: true,
	logging: {
		fetches: {
			fullUrl: process.env.NODE_ENV === 'development',
		},
	},
	experimental: {
		optimizePackageImports: ['motion'],
		webVitalsAttribution: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP'],
	},
	images: {
		deviceSizes: [390, 435, 768, 1024, 1280],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
			{
				protocol: 'https',
				hostname: 'api.microlink.io',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},
}

export default withBundleAnalyzer(nextConfig)
