/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  experimental: {
    nextScriptWorkers: true,
  },
  images: {
    domains: ["cms.vodafone.com.tr", "www.vodafone.com.tr"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
};

module.exports = nextConfig;
