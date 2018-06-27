var packageJson = require('./package.json');

module.exports = {
  cacheId: packageJson.name,
  staticFileGlobs: [
    'assets/icon/**.png',
    'build/**.css',
    'build/**.js',
    'manifest.json'
  ],
  importScripts: ['push-notification.js'],
  navigateFallback: 'index.html',
  runtimeCaching: [
    {
      urlPattern: 'assets/**/**.*',
      handler: "networkFirst",
      options: {
        cache: {
          name: 'asset_cache'
        }
      }
    }
  ],
  verbose: true
};
