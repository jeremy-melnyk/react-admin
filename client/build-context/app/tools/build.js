/* eslint-disable no-console */

// More info on Webpack"s Node API here: https://webpack.js.org/api/node/
// Allowing console calls below since this is a build file.
import webpack from "webpack";
import config from "../webpack.config.prod";
import {
  chalkError,
  chalkSuccess,
  chalkWarning
} from "./chalkConfig";

// This assures React is built in prod mode and that the Babel dev config doesn't apply.
process.env.NODE_ENV = "production";

console.log(chalkSuccess("Generating minified bundle. This will take a moment..."));

webpack(config).run((error, stats) => {
  // A fatal error occurred. Stop here.
  if (error) {
    console.log(chalkError(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalkError(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalkWarning("Webpack generated the following warnings: "));
    jsonStats.warnings.map(warning => console.log(chalkWarning(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  // The build succeeded.
  console.log(chalkSuccess("App is compiled in production mode in /dist."));

  return 0;
});
