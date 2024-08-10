/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    redirects: async () => {
      return [
        {
          source: "/",
          destination: "/home",
          permanent: true,
        },
      ];
    },
  },
};

export default nextConfig;
