const withPlugins = (plugins = [], nextConfig = {}) =>
	plugins.reduce((config, plugin) => plugin(config), nextConfig);

module.exports = withPlugins;
