/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	typescript: { ignoreBuildErrors: true },
	eslint: { ignoreDuringBuilds: true },
};
