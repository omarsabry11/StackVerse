import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";


const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.1.5'],
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);

