import { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const spanishConfiguration: LocaleSpecificConfig<DefaultTheme.Config> = {
  description: "Documentación",
  themeConfig: {
    lastUpdated: {
      text: "Última actualización",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Sobre nosotros", link: "/about" },
      {
        text: "La Meva Salut Plus",
        link: "/es/la-meva-salut-plus",
      },
    ],

    sidebar: [
      {
        text: "Proyectos",
        items: [
          {
            text: "La Meva Salut Plus",
            items: [
              {
                text: "Documentación",
                link: "/es/la-meva-salut-plus/index",
              },
              {
                text: "Características",
                link: "/es/la-meva-salut-plus/features",
              },
              {
                text: "Errores conocidos y no conocidos",
                link: "/es/la-meva-salut-plus/bugs",
              },
              {
                text: "Lista de cambios",
                link: "/es/la-meva-salut-plus/changelog",
              },
              {
                text: "Política de privacidad",
                link: "/la-meva-salut-plus/privacy-policy",
              },
              {
                text: "Términos y condiciones",
                link: "/la-meva-salut-plus/terms-and-conditions",
              },
            ],
          },
        ],
      },
    ],
  },
};
