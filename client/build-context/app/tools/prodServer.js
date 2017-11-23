// This file configures a web server for testing the production server
// on your local machine.

import browserSync from "browser-sync";
import historyApiFallback from "connect-history-api-fallback";
import {
  chalkProcessing
} from "./chalkConfig";

console.log(chalkProcessing("Starting production server...")); // eslint-disable-line no-console

// Run Browsersync
browserSync({
  port: 4000,
  ui: {
    port: 4001
  },
  server: {
    baseDir: "dist"
  },

  files: [
    "src/*.html"
  ],

  middleware: [historyApiFallback()],

  open: false
});
