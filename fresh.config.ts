import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import svgMinify from "jsr:@kitsonk/svg-minify@~0.1";

export default defineConfig({
  plugins: [tailwind(), svgMinify()],
});
