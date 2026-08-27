import type { NextConfig } from "next";

// GitHub Pages のようなサブパス配信では NEXT_PUBLIC_BASE_PATH（例: /onioni-nozomiren-site）を指定してビルドする
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
