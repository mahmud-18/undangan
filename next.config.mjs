/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],

    unoptimized:true,
  },
  reactCompiler: true,
};

export default nextConfig;
