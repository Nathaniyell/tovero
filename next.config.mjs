/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@public": "./public",
      };
      return config;
    },
  };
  
  export default nextConfig;