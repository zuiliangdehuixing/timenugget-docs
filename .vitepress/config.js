import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TimeNugget",
  description: "TimeNugget 文档",
  head: [["link", { rel: "icon", href: "/avatar.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: "/avatar.png",

    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/docs/what-is-timenugget" },
      { text: "求生宝典", link: "/SurvivalManual/" },
      {
        text: "官方Q群",
        link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=tXOsaPqZw_uTCdyg2Oj4i9lrFYemnwo2&authKey=QMuIYrJ%2FC2hS7kkoDn0%2FuoxuFqXonuL5mZpGhXGbsgjxYIPrDDRJimVk0bYcMj5I&noverify=0&group_code=348025806",
      },
    ],

    search: {
      provider: "local",
    },

    sidebar: {
      "/docs/": [
        {
          text: "简介",
          items: [
            { text: "什么是 TimeNugget", link: "/docs/what-is-timenugget" },
          ],
        },
        {
          text: "推荐",
          items: [
            { text: "Github项目推荐", link: "/docs/github-recommendations" },
          ],
        },
        {
          text: "高效使用AI",
          items: [
            { text: "AI软件推荐", link: "/docs/ai-software" },
            { text: "提示词工程", link: "/docs/prompt-engineering" },
          ],
        },
      ],
      "/SurvivalManual/": [
        {
          text: "求生宝典",
          items: [{ text: "济南大学", link: "/SurvivalManual/" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/TimeNugget" }],
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
  },
});
