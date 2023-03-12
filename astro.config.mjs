import { defineConfig } from 'astro/config';
import unocss from "@unocss/astro";
import presetWind from '@unocss/preset-wind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    unocss({
      presets: [
        presetWind(),
        /* more presets */
      ],
      safelist: [
        /* this you can use to exclude utilities from purge */
      ],
    })
  ]
});
