import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    // Morphs a project image into its case-study cover. Browsers without
    // the View Transitions API simply navigate without the animation.
    viewTransition: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
