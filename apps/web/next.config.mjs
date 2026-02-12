import { withContentlayer } from "next-contentlayer";


/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: "../../",
  },
};

export default withContentlayer(nextConfig);
