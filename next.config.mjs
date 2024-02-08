/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.keepa.com"]
        // remotePatterns: [
        //   {
        //     protocol: 'https',
        //     hostname: 'cdn.keepa.com',
        //     port: '',
        //     pathname: '/img',
        //   },
        // ],
      },
};

export default nextConfig;
