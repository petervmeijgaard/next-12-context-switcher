const path = require("node:path");
const fs = require("node:fs");

const loadModule = (moduleName) => {
	const segments = moduleName.split("/");

	const packagePath = path.join(__dirname, "node_modules", ...segments, "dist");

	if (!fs.existsSync(packagePath)) {
		throw new Error(`Module ${moduleName} not found`);
	}

	return path.join(packagePath, "**", "*.js");
};

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		loadModule("@acme/shared"),
		loadModule("@acme/ui"),
	],
	presets: [require("@acme/tailwind-config")],
	plugins: [require("tailwindcss-animate")],
};
