import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wombat Epic Landing Studio",
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
        link: "/la-meva-salut-plus/",
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
                link: "/la-meva-salut-plus/",
              },
              {
                text: "Features",
                link: "/la-meva-salut-plus/features",
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

    socialLinks: [
      { icon: "github", link: "https://github.com/wombatepiclandingstudio" },
      {
        icon: "instagram",
        link: "https://www.instagram.com/wombatepiclandingstudio",
      },
    ],

    footer: {
      message: "&lt;/&gt; with ❤️ by Wombat Epic Landing Studio",
      copyright: "Copyright ©2024-present, Wombat Epic Landing Studio",
    },
  },
});
