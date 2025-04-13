import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/matte" : "",
  reactStrictMode: true,
  output: "export",
};
export default nextConfig;
