import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TimeNugget",
  description: "TimwNugget的文档~",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/docs/" },
      { text: "其他", link: "/others/" },
      {
        text: "官方Q群",
        link: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=tXOsaPqZw_uTCdyg2Oj4i9lrFYemnwo2&authKey=QMuIYrJ%2FC2hS7kkoDn0%2FuoxuFqXonuL5mZpGhXGbsgjxYIPrDDRJimVk0bYcMj5I&noverify=0&group_code=348025806",
      },
    ],

    sidebar: {
      "/docs/": [
        {
          text: "简介",
          items: [{ text: "介绍", link: "/docs/" }],
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
      "/others/": [
        {
          text: "其他",
          items: [{ text: "介绍", link: "/others/" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/TimeNugget" }],
  },
});
