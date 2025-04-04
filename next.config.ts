import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['scantech.co.in'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'scantech.co.in',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
