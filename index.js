var PluginBuilder = require("bit-plugin-builder");
var umd_deps = require("deps-bits");

var defaults = {
  extensions: ["js"],
  dependency: function(m) {
    return umd_deps(m, { amd: false });
  }
};

function jsPlugin(options) {
  return PluginBuilder
    .create(defaults)
    .configure(options)
    .build();
}

module.exports = jsPlugin;
