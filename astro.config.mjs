// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://landiluigi746.github.io",
  base: "/portfolio",
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Google Sans Flex",
      cssVariable: "--font-google-sans-flex",
      weights: ["100 900"],
      styles: ["normal"],
    },
  ],
});
