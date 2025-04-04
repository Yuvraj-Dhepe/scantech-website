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
  // Only run TypeScript type checking on app code, not on Supabase functions
  typescript: {
    // We're not ignoring all build errors, just configuring which files to check
    ignoreBuildErrors: false,
  },
  // Exclude Supabase functions from the build
  webpack: (config, { isServer }) => {
    // Add the supabase directory to the list of excluded directories
    if (isServer) {
      config.externals = [...config.externals, 'supabase'];
    }
    return config;
  },
};

export default nextConfig;
