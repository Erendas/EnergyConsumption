const path = require('path');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "https": require.resolve("https-browserify"),
    // other fallbacks if needed
  };
  return config;
};