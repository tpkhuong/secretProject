var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
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
