import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: "standalone",
  serverExternalPackages: ['@takumi-rs/image-response'],
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/docs/:path*',
      },
    ];
  },
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: '2006567897-files.gitbook.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withMDX(config);
