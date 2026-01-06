/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.preview.same-app.com"],
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
      "teribphotography.com",
      "www.teribphotography.com",
      "d397bfy4gvgcdm.cloudfront.net",
      "images.squarespace-cdn.com",
      "lifestory.film",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "teribphotography.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.teribphotography.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d397bfy4gvgcdm.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lifestory.film",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
