const transpileModules = require("next-transpile-modules");

const includes = ["@acme/contextify", "@acme/my-component"];

module.exports = transpileModules(includes);
