/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable server components external packages as it's not needed in newer Next.js versions
  serverExternalPackages: ['@tailwindcss/typography'],
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Configure webpack
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `canvas` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
      };
    }
    
    // Add any additional webpack configurations here
    return config;
  },
  
  // Enable static exports for Vercel
  output: 'standalone',
  
  // Configure images
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
