var path = require("path");
var toml = require("toml");
var yaml = require("yamljs");
var json5 = require("json5");


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      /*css and style loader*/
      {
        test: /\.css$/i,
        /* goes from right to left */
        use: ['style-loader', 'css-loader'],
      },
      /*image loader*/
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      /*fonts loader*/
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      /*data loader. json file are supported by default */
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser:{
          parse: toml.parse,
        }
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        }
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse
        }
      }
    ]
  }
};

/*
If a webpack.config.js is present, the webpack command picks it up by default. We use the --config option here only to show that you can pass a configuration of any name.
This will be useful for more complex configurations that need to be split into multiple files.
*/

/*
Out of the box, webpack won't require you to use a configuration file. However, it will assume the entry point of your project is src/index.js
and will output the result in dist/main.js minified and optimized for production.

Usually your projects will need to extend this functionality, for this you can create a webpack.config.js file in the root folder and webpack will automatically use it.
*/
