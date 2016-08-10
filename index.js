var PluginBuilder = require("bit-plugin-builder");
var pullDeps = require("pulling-deps");

var defaults = {
  extensions: ["js"],
  dependency: function(data) {
    return {
      deps: pullDeps(data.source, { amd: false }).dependencies
    };
  }
};

function jsPlugin(options) {
  return PluginBuilder
    .create(defaults)
    .configure(options)
    .build();
}

module.exports = jsPlugin;
