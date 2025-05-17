/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow remote images from skillicons.dev
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
      },
    ],
    dangerouslyAllowSVG: true, // Enables SVG handling
    // Enable static image support for local images in the public directory
    unoptimized: false, // Optional: Set true to disable image optimization for all images
  },
};

export default nextConfig;
