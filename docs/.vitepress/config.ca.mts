import { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const catalanConfiguration: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: "Documentació",
  themeConfig: {
    lastUpdated: {
      text: "Última actualizació",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Inici", link: "/ca/" },
      { text: "Sobre nosaltres", link: "/ca/about" },
      {
        text: "La Meva Salut Plus",
        link: "/ca/la-meva-salut-plus",
      },
    ],

    sidebar: [
      {
        text: "Projectes",
        items: [
          {
            text: "La Meva Salut Plus",
            items: [
              {
                text: "Documentació",
                link: "/ca/la-meva-salut-plus/index",
              },
              {
                text: "Característiques",
                link: "/ca/la-meva-salut-plus/features",
              },
              {
                text: "Errors coneguts i no coneguts",
                link: "/ca/la-meva-salut-plus/bugs",
              },
              {
                text: "Llista de cambis",
                link: "/ca/la-meva-salut-plus/changelog",
              },
              {
                text: "Política de privacitat",
                link: "/ca/la-meva-salut-plus/privacy-policy",
              },
              {
                text: "Terms i condicions",
                link: "/ca/la-meva-salut-plus/terms-and-conditions",
              },
            ],
          },
        ],
      },
    ],
  },
};
