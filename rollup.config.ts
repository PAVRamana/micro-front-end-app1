import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "rollup";
import { externals } from "rollup-plugin-node-externals";

export default defineConfig({
  input: "./src/index.ts",
  treeshake: false,
  /*output: [
    {
      dir: "lib/cjs",
      format: "commonjs",
      sourcemap: true,
      exports: "named",
    }
  ],*/
  plugins: [externals(), typescript()],
});
