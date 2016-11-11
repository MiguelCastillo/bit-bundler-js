var pullDeps = require("pulling-deps");
var utils = require("belty");

function buildPlugin(options, builder) {
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

  return builder
    .configure(defaults)
    .configure(options);
}

module.exports = function factory(options) {
  return function(builder) {
    return buildPlugin(options, builder);
  };
};
