import { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const englishConfiguration: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: "The documentation pages",
  themeConfig: {
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      {
        text: "La Meva Salut Plus",
        link: "/la-meva-salut-plus",
      },
    ],

    sidebar: [
      {
        text: "Projects",
        items: [
          {
            text: "La Meva Salut Plus",
            items: [
              {
                text: "Documentation",
                link: "/la-meva-salut-plus",
              },
              {
                text: "Features",
                link: "/la-meva-salut-plus/features",
              },
              {
                text: "Bugs and known issues",
                link: "/la-meva-salut-plus/bugs",
              },
              {
                text: "Changelog",
                link: "/la-meva-salut-plus/changelog",
              },
              {
                text: "Privacy Policy",
                link: "/la-meva-salut-plus/privacy-policy",
              },
              {
                text: "Terms and Conditions",
                link: "/la-meva-salut-plus/terms-and-conditions",
              },
            ],
          },
        ],
      },
    ],
  },
};
