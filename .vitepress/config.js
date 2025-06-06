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
      { text: "文档", link: "/docs/" },
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
          items: [{ text: "TimeNugget", link: "/docs/" }],
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
          text: "简介",
          items: [{ text: "求生宝典", link: "/SurvivalManual/" }],
        },
        {
          text: "选择大学",
          items: [
            { text: "济南大学", link: "/SurvivalManual/ujn/" },
            { text: "其他大学", link: "/SurvivalManual/others/" },
          ],
        },
      ],
      "/SurvivalManual/ujn/": [
        {
          text: "济南大学",
          items: [
            { text: "免责声明", link: "/SurvivalManual/ujn/disclaimer" },
            { text: "序言", link: "/SurvivalManual/ujn/preface" },
            {
              text: "第一章 认识“大学”",
              link: "/SurvivalManual/ujn/First/",
              items: [
                {
                  text: "大学系统的本质",
                  link: "/SurvivalManual/ujn/First/One",
                },
                { text: "信息差地图", link: "/SurvivalManual/ujn/First/Two" },
                {
                  text: "时间价值量化",
                  link: "/SurvivalManual/ujn/First/Three",
                },
              ],
            },
            {
              text: "第二章 反内卷",
              link: "/SurvivalManual/ujn/Second/",
              items: [
                {
                  text: "选课的“断舍离”",
                  link: "/SurvivalManual/ujn/Second/One",
                },
                { text: "考试突击", link: "/SurvivalManual/ujn/Second/Two" },
                {
                  text: "避坑指南",
                  link: "/SurvivalManual/ujn/Second/Three",
                },
              ],
            },
            {
              text: "第三章 时间管理",
              link: "/SurvivalManual/ujn/Third/",
              items: [
                {
                  text: "反常识时间分配",
                  link: "/SurvivalManual/ujn/Third/One",
                },
                {
                  text: "优先级决策模型",
                  link: "/SurvivalManual/ujn/Third/Two",
                },
                {
                  text: "工具与系统",
                  link: "/SurvivalManual/ujn/Third/Three",
                },
              ],
            },
            {
              text: "第四章 资源“掠夺”",
              link: "/SurvivalManual/ujn/Fourth/",
              items: [
                {
                  text: "人脉网络搭建",
                  link: "/SurvivalManual/ujn/Fourth/One",
                },
                {
                  text: "免费资源地图",
                  link: "/SurvivalManual/ujn/Fourth/Two",
                },
                {
                  text: "信息验证机制",
                  link: "/SurvivalManual/ujn/Fourth/Three",
                },
              ],
            },
            {
              text: "第五章 风险对冲",
              link: "/SurvivalManual/ujn/Fifth/",
              items: [
                {
                  text: "制度性风险预警",
                  link: "/SurvivalManual/ujn/Fifth/One",
                },
                {
                  text: "健康与安全止损",
                  link: "/SurvivalManual/ujn/Fifth/Two",
                },
                {
                  text: "决策备份系统",
                  link: "/SurvivalManual/ujn/Fifth/Three",
                },
              ],
            },
            {
              text: "第六章 认知升维",
              link: "/SurvivalManual/ujn/Sixth/",
              items: [
                {
                  text: "大学的 “第三空间”",
                  link: "/SurvivalManual/ujn/Sixth/One",
                },
                {
                  text: "反脆弱思维",
                  link: "/SurvivalManual/ujn/Sixth/Two",
                },
                {
                  text: "认知工具箱",
                  link: "/SurvivalManual/ujn/Sixth/Three",
                },
              ],
            },
            { text: "致谢", link: "/SurvivalManual/ujn/Thanks" },
          ],
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
