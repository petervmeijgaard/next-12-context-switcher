const withTranspiledModules = require("./next-config/withTranspiledModules");
const withPlugins = require("./next-config/withPlugins");

const plugins = [withTranspiledModules];

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	typescript: { ignoreBuildErrors: true },
	eslint: { ignoreDuringBuilds: true },
};

module.exports = withPlugins(plugins, nextConfig);
