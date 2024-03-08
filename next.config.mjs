/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "image.tmdb.org",
      },
      {
        protocol: 'https',
        hostname: "img.freepik.com",
      },
      // Tambahkan hostname lainnya di sini jika diperlukan
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
