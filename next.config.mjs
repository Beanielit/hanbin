/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // basePath: process.env.NEXT_PUBLIC_ENVIRONMENT === "local" ? "/" : "/hanbin",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
