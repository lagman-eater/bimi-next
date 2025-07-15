/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 🔥 Enables static export
  trailingSlash: true, // ✅ Optional, makes sure `/page/` maps to `/page/index.html`
  images: {
    unoptimized: true, // ✅ Required if using `next/image`
  },
};

module.exports = nextConfig;
