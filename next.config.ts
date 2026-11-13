import type { NextConfig } from 'next';
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '/han-soohyun-portfolio').replace(/\/$/, '');
const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  output: 'export',
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
};
export default nextConfig;
