import { defineConfig } from "vitepress";

// https://github.com/vuejs/test-utils/blob/main/docs/.vitepress/config/shared.mts
export const sharedConfiguration = defineConfig({
  title: "Wombat Epic Landing Studio",
  appearance: true,

  markdown: {
    theme: {
      dark: "one-dark-pro",
      light: "github-light",
    },
  },

  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/wombatepiclandingstudio" },
      {
        icon: "instagram",
        link: "https://www.instagram.com/wombatepiclandingstudio",
      },
      {
        icon: "youtube",
        link: "https://www.youtube.com/channel/UCBVYuRZIJV3y6eDW7nQbgOA",
      },
    ],

    footer: {
      message: "&lt;/&gt; with ❤️ by Wombat Epic Landing Studio",
      copyright: "Copyright ©2024-present, Wombat Epic Landing Studio",
    },

    editLink: {
      pattern: "https://github.com/wombatepiclandingstudio/wombatepiclandingstudio.github.io/blob/main/docs/:path",
      text: "Suggest changes",
    },
  },
});
