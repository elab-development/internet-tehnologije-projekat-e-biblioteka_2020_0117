const util = require.resolve('util/');

module.exports = function override(config, env) {
  // Add the fallback for the util module
  config.resolve.fallback = { ...config.resolve.fallback, util };

  return config;
};
