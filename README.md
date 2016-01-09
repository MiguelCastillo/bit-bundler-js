# bit-loader-js
> bit-loader plugin for JavaScript

The output of this plugin factory is a configuration Object that can be used as a [bit-loader](https://github.com/MiguelCastillo/bit-loader) plugin.

### Example

#### Simple plugin configuration with Babel transform

``` javascript
  var jsPlugin = require("bit-loader-js");
  var babelbits = require("babel-bits");

  var pluginConfig = jsPlugin({
    transform: babelbits
  });
```

### License

Licensed under MIT
