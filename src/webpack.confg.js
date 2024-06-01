"use strict";

import path from "path";

export default {
  mode: "development",
  entry: "./js/script.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist/js",
  },
  watch: true,

  devtool: "source-map",

  module: {},
};
