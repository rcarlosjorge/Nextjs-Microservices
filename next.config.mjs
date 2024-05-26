/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.pixabay.com"],
  },
  output: "standalone",
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    API_URL: process.env.API_URL,
    ID_URL: process.env.ID_URL,
    NEXT_PUBLIC_NOTIFY_URL: process.env.NEXT_PUBLIC_NOTIFY_URL,
  },
};

export default nextConfig;
