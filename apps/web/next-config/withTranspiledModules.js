const transpileModules = require("next-transpile-modules");

const includes = [
	"@acme/contextify",
	"@acme/my-component",
	"@acme/netlify-api",
];

module.exports = transpileModules(includes);
