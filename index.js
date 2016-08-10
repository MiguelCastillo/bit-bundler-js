var PluginBuilder = require("bit-plugin-builder");
var pullDeps = require("pulling-deps");
var utils = require("belty");

function jsPlugin(options) {
  var depsOptions = utils.extend({
    amd: false,
    cjs: true
  }, utils.pick(options, ["amd", "cjs", "options"]));

  var defaults = {
    extensions: ["js"],
    dependency: function(data) {
      return {
        deps: pullDeps(data.source, depsOptions).dependencies
      };
    }
  };

  return PluginBuilder
    .create(defaults)
    .configure(options)
    .build();
}

module.exports = jsPlugin;
