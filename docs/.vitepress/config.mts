import { defineConfig } from "vitepress";
import { englishConfiguration } from "./config.en.mts";
import { spanishConfiguration } from "./config.es.mts";
import { sharedConfiguration } from "./config.shared.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...sharedConfiguration,
  locales: {
    root: {
      label: "English",
      lang: "en-US",
      link: "/",
      ...englishConfiguration,
    },
    es: {
      label: "Español",
      lang: "es-ES",
      link: "/es/",
      ...spanishConfiguration,
    },
  },
});
