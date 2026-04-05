/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    domains: ["api.sthg.ac.id"],
    unoptimized: true,
  },
};

export default nextConfig;
