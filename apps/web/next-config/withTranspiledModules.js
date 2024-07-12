const transpileModules = require("next-transpile-modules");

const includes = [
	"@acme/contextify",
	"@acme/shared",
	"@acme/netlify-api",
	"@acme/ui",
];

module.exports = transpileModules(includes);
