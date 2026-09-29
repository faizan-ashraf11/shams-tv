import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // `next dev` and `next build` must not share an output folder: a production build
  // wipes `.next`, which breaks a running dev server (MODULE_NOT_FOUND / missing
  // routes-manifest.json). Dev gets its own folder; builds/Vercel keep the default.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  images: {
    loader: 'custom',
    loaderFile: './lib/unsplash-loader.ts',
  },
};

export default nextConfig;
