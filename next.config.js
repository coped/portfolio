/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enables compatibility with styled-components
  compiler: {
    styledComponents: true,
  },
  // Allows fetching images from AWS S3
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/cope.sh/**',
      },
    ],
  },
};

module.exports = nextConfig;
