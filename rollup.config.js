import typescript from "@rollup/plugin-typescript";
import { uglify } from "rollup-plugin-uglify";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.min.js",
    format: "cjs",
  },
  plugins: [typescript(), json({ compact: true }), uglify()],
};
