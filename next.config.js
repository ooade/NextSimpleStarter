const webpack = require('webpack');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  webpack: (config, { dev }) => {
    /* Enable only in Production */
    if (!dev) {
      // Use Preact
      config.resolve.alias = {
        'react': 'preact-compat/dist/preact-compat',
        'react-dom': 'preact-compat/dist/preact-compat'
      }
      // Service Worker
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          filename: 'sw.js',
          staticFileGlobsIgnorePatterns: [/\.next\//],
          staticFileGlobs: [
            /* Pass static files to precache here */
          ],
          forceDelete: true,
          runtimeCaching: [
            // Example with different handlers
            {
              handler: 'fastest',
              urlPattern: /[.](png|jpg)/
            },
            {
              handler: 'networkFirst',
              urlPattern: /.*/ //cache all files
            }
          ]
        })
      );
    }

    return config;
  }
}
