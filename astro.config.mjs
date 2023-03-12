import { defineConfig } from "astro/config";
import unocss from "@unocss/astro";
import presetWind from "@unocss/preset-wind";
import presetWebFonts from "@unocss/preset-web-fonts";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    unocss({
      presets: [
        presetWind(),
        presetWebFonts({
          provider: "google",
          fonts: {
            mono: "Space Mono",
          },
        }),
      ],
      safelist: [
        /* this you can use to exclude utilities from purge */
      ],
    }),
  ],
});
