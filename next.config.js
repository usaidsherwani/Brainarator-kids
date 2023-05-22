const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@balkangraph/orgchart.js']);
const withBundleAnalyzer = require('@next/bundle-analyzer');

require('dotenv').config();

const nextConfig = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html',
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html',
    },
  },
};

module.exports = withPlugins([[withTM], [withBundleAnalyzer]], nextConfig);
