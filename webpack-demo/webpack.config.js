var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var {CleanWebpackPlugin} = require("clean-webpack-plugin");
// var toml = require("toml");
// var yaml = require("yamljs");
// var json5 = require("json5");


module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ]
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

/*
We can see that webpack generates our print.bundle.js and index.bundle.js files, which we also specified in our index.html file.
if you open index.html in your browser, you can see what happens when you click the button.

But what would happen if we changed the name of one of our entry points, or even added a new one? The generated bundles would be renamed on a build,
but our index.html file would still reference the old names. Let's fix that with the HtmlWebpackPlugin.

Setting up HtmlWebpackPlugin
*/

/*
the HtmlWebpackPlugin by default will generate its own index.html file, even though we already have one in the dist/ folder.
This means that it will replace our index.html file with a newly generated one. Let's see what happens when we do an npm run build:

HtmlWebpackPlugin has created an entirely new file for you and that all the bundles are automatically added.
*/

/*
clean the /dist folder before each build, so that only used files will be generated. Let's take care of that.
Webpack will generate the files and put them in the /dist folder for you, but it doesn't keep track of which files are actually in use by your project.
*/

/*
plugins seem to "know" what files are being generated. The answer is in the manifest that webpack keeps to track how all the modules map to the output bundles.
If you're interested in managing webpack's output in other ways, the manifest would be a good place to start.
*/