var path = require("path");
// var toml = require("toml");
// var yaml = require("yamljs");
// var json5 = require("json5");


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // module: {
  //   rules: [
  //     /*css and style loader*/
  //     {
  //       test: /\.css$/i,
  //       /* goes from right to left */
  //       use: ['style-loader', 'css-loader'],
  //     },
  //     /*image loader*/
  //     {
  //       test: /\.(png|svg|jpg|jpeg|gif)$/i,
  //       type: 'asset/resource',
  //     },
  //     /*fonts loader*/
  //     {
  //       test: /\.(woff|woff2|eot|ttf|otf)$/i,
  //       type: 'asset/resource'
  //     },
  //     /*data loader. json file are supported by default */
  //     {
  //       test: /\.(csv|tsv)$/i,
  //       use: ["csv-loader"],
  //     },
  //     {
  //       test: /\.xml$/i,
  //       use: ["xml-loader"],
  //     },
  //     {
  //       test: /\.toml$/i,
  //       type: "json",
  //       parser:{
  //         parse: toml.parse,
  //       }
  //     },
  //     {
  //       test: /\.yaml$/i,
  //       type: "json",
  //       parser: {
  //         parse: yaml.parse,
  //       }
  //     },
  //     {
  //       test: /\.json5$/i,
  //       type: "json",
  //       parser: {
  //         parse: json5.parse
  //       }
  //     }
  //   ]
  // }
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

/*
The coolest part of everything mentioned above, is that loading assets this way allows you to group modules and assets in a more intuitive way. Instead of relying on a global /assets directory that contains everything, you can group assets with the code that uses them. For example, a structure like this can be useful:

 |- /assets
 |– /components
 |  |– /my-component
 |  |  |– index.jsx
 |  |  |– index.css
 |  |  |– icon.svg
 |  |  |– img.png
This setup makes your code a lot more portable as everything that is closely coupled now lives together. Let's say you want to use /my-component in another project,
simply copy or move it into the /components directory over there. As long as you've installed any
external dependencies and your configuration has the same loaders defined, you should be good to go.

However, let's say you're locked into your old ways or you have some assets that are shared between multiple components
(views, templates, modules, etc.). It's still possible to store these assets in a base directory and even use aliasing to make them easier to import
*/