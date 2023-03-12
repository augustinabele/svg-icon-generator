import { defineConfig } from "astro/config";
import unocss from "@unocss/astro";
import presetWind from "@unocss/preset-wind";
import presetWebFonts from "@unocss/preset-web-fonts";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [unocss({
    presets: [presetWind(), presetWebFonts({
      provider: "google",
      fonts: {
        mono: "Space Mono"
      }
    })],
    safelist: [
      /* this you can use to exclude utilities from purge */
    ]
  })],
  output: "server",
  adapter: vercel()
});