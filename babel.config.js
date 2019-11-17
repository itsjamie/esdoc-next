module.exports = function(api) {
  api.cache(true);

  const presets = ['@babel/preset-env'];
  const plugins = ['@babel/plugin-transform-modules-commonjs'];
  const env = {coverage: {plugins: ['istanbul']}};
  
  return {
    presets,
    plugins,
    env
  };
};
