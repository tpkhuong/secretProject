import _ from "lodash";
import "./style.css";
import mapIcon from  "./images/mapbox-icon.png";
import Data from "./data/data.xml";
import Notes from "./data/data.csv";

function component() {
  var element = document.createElement("div");
  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add('hello');
  //add image to ur div
  var ourIcon = new Image();
  ourIcon.src = mapIcon;

  element.appendChild(ourIcon);

  console.log(Data);
  console.log(Notes);

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

/***
 * Now the npm run build command can be used in place of the npx command we used earlier. Note that within scripts we can reference locally
 * installed npm packages by name the same way we did with npx.
 * This convention is the standard in most npm-based projects because it allows all contributors to use the same set of common scripts.
 * ***/

/*
 Custom parameters can be passed to webpack by adding two dashes between the npm run build command and your parameters, e.g. npm run build -- --color.
 */

/*
This can be especially helpful when implementing some sort of data visualization using a tool like d3. Instead of making an ajax request and parsing the data at
runtime you can load it into your module during the build process so that the parsed data is ready to go as soon as the module hits the browser.
*/