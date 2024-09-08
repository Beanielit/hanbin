/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    output: "export",
    ...{ ...(process.env.ENVIRONMENT === "local" && { basePath: "/hanbin" }) },
    ...{ ...(process.env.ENVIRONMENT === "local" && { assetPrefix: "/hanbin/" }) },
    images: {
        unoptimized: true
    }
};

export default nextConfig;
