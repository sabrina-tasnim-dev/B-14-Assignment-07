/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "lh3.googleusercontent.com",
        
        pathname: '**',
      
      },
      {
        protocol:"https",
        hostname:"avatars.githubusercontent.com",
        pathname:'**'
      }
    ],
  },
};

export default nextConfig;
