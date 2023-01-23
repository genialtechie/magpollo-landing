/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'via.placeholder.com'],
  },
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { display: 'swap', subsets: ['latin'] },
      },
    ],
  },
};

module.exports = nextConfig;
