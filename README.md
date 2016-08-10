## deprecated. use [bit-loader-npm](https://github.com/MiguelCastillo/bit-loader-npm)

# bit-loader-js
> bit-loader plugin for processing JavaScript dependencies with cjs and import syntax

by default, bit-loader-js will only process require and import syntax. You can optionally enable amd syntax.

## Options

- amd: boolean. defaults to false. Flag to enable/disable amd syntax
- cjs: boolean. defaults to true. Flag to enable/disable cjs syntax


## Example

### Plugin configuration with bit-bundler

``` javascript
var BitBundler = require("bit-bundler");
var jsPlugin = require("bit-loader-js");

var bundler = new Bitbundler({
  loader: {
    plugins: [
      jsPlugin()
    ]
  }
});
```

### With amd syntax enabled

``` javascript
var BitBundler = require("bit-bundler");
var jsPlugin = require("bit-loader-js");

var bundler = new Bitbundler({
  loader: {
    plugins: [
      jsPlugin({
        amd: true
      })
    ]
  }
});
```


## Install

```
$ npm install bit-loader-js --save
```

## License

Licensed under MIT
