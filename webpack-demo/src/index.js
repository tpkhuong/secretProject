import _ from "lodash";
function component() {
  var element = document.createElement("div");
  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
/***
 * When installing a package that will be bundled into your production bundle, you should use npm install --save. If you're installing a package for development purposes
 * (e.g. a linter, testing libraries, etc.) then you should use npm install --save-dev. More information can be found in the npm documentation.
 * ***/

/***
 * With that said, let's run npx webpack, which will take our script at src/index.js as the entry point,
 * and will generate dist/main.js as the output. The npx command, which ships with Node 8.2/npm 5.2.0 or higher,
 * runs the webpack binary (./node_modules/.bin/webpack) of the webpack package we installed in the beginning
 * ***/
