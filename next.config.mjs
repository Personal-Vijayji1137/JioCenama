/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'v3img.voot.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
    
};

export default nextConfig;
