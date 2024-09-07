import { defineConfig } from "vitepress";
import { englishConfiguration } from "./config.en.mts";
import { spanishConfiguration } from "./config.es.mts";
import { sharedConfiguration } from "./config.shared.mts";
import { catalanConfiguration } from "./config.ca.mts";

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
    ca: {
      label: "Català",
      lang: "ca-ES",
      link: "/ca/",
      ...catalanConfiguration,
    },
  },
});
