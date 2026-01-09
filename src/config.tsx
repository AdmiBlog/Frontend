import { MenuItem } from "interfaces/menuitem";
import { SiteConfig } from "interfaces/siteconfig";
import { FooterBadge } from "interfaces/footerbadge";
import { Icon } from "@iconify/react";

export const siteConfigs: SiteConfig = {
  author: "Admibrill",
  title: "埃氮幂の命名空间",
  siteUrl: "https://blog.qyadbr.top",
  avatar: "https://blog.qyadbr.top/avatar_.ico",
  twikooEnv: "https://serene-zuccutto-63ff75.netlify.app/.netlify/functions/twikoo",
  createYear: 2024,
  createMonth: 10,
  createDay: 8,
  homeMaxPosts: 15,
  pageMaxPosts: 16,
  falldownAvatar: "https://img.0v0.my/2024/09/06/66dabf7f748c8.jpg",
  falldownImg: "https://img.0v0.my/2024/08/31/66d30329375a5.webp",
  backEndUrl: "https://blogend.qyadbr.top",
  socials: [
    {
      name: "Github",
      url: "https://github.com/admibrill",
      icon: <Icon icon="fa6-brands:github" />,
    },
    {
      name: "Email",
      url: "mailto:admibrill@outlook.com",
      icon: <Icon icon="fa6-solid:envelope" />,
    },
    {
      name: "QQ",
      url: "tencent://message/?uin=3685870695&Site=&Menu=yes",
      icon: <Icon icon="fa6-brands:qq" />,
    },
    {
      name: "Bilibili",
      url: "https://space.bilibili.com/3546727141346191",
      icon: <Icon icon="fa6-brands:bilibili" />,
    },
    {
      name: "RSS",
      url: "/atom.xml",
      icon: <Icon icon="fa6-solid:rss" />,
    },
  ],
};

export const MenuItems: MenuItem[] = [
  {
    name: "文章",
    link: "",
    icon: <Icon icon="fa6-solid:newspaper" />,
    childs: [
      {
        name: "归档",
        link: "/archives",
        icon: <Icon icon="fa6-solid:box-archive" />,
      },
      {
        name: "标签",
        link: "/tags",
        icon: <Icon icon="fa6-solid:tags" />,
      },
      {
        name: "分类",
        link: "/categories",
        icon: <Icon icon="fa6-solid:folder-open" />,
      }
    ],
  },
  {
    name: "社交",
    link: "",
    icon: <Icon icon="fa6-solid:link" />,
    childs: [
    //   {
    //     name: "个人主页",
    //     link: "https://yaria.top",
    //     icon: <Icon icon="fa6-solid:house-chimney" />,
    //   },
      {
        name: "友人帐",
        link: "/links",
        icon: <Icon icon="fa6-solid:link" />,
      },
      {
        name: "朋友圈",
        link: "/fcircle",
        icon: <Icon icon="fa6-solid:circle-nodes" />,
      },
      {
        name: "留言板",
        link: "/comments",
        icon: <Icon icon="fa6-solid:envelope" />,
      },
    ],
  },
  {
    name: "我的",
    link: "",
    icon: <Icon icon="fa6-solid:user" />,
    childs: [
      {
        name: "音乐厅",
        link: "/music",
        icon: <Icon icon="fa6-solid:music" />,
      },
      {
        name: "关于我",
        link: "/about",
        icon: <Icon icon="fa6-solid:plane" />,
      },
      {
        name: "网址导航",
        link: "/nav",
        icon: <Icon icon="fa6-solid:stopwatch" />,
      }
    ],
  },
  {
    name: "本站",
    link: "",
    icon: <Icon icon="fa6-solid:computer" />,
    childs: [
      {
        name: "闲言碎语",
        link: "/essay",
        icon: <Icon icon="fa6-solid:lightbulb" />,
      },
      {
        name: "时间戳",
        link: "/timeline",
        icon: <Icon icon="fa6-solid:clock" />,
      },
      {
        name: "声明",
        link: "/license",
        icon: <Icon icon="fa6-solid:bell" />,
      },

    ]
  }
];

export const FooterBadges: FooterBadge[] = [
  {
    badgeUrl: "https://img.shields.io/badge/Framework-Next.js-black?style=flat",
    link: "https://nextjs.org",
  },
  {
    badgeUrl: "https://img.shields.io/badge/Hosted-Vercel-success?style=flat",
    link: "https://vercel.app",
  },
//   {
//     badgeUrl: "https://img.shields.io/badge/CDN-ChuqiCDN-006CFF?style=flat",
//     link: "https://www.chuqiyun.com",
//   },
  {
    badgeUrl: "https://img.shields.io/badge/CC-BY--NC--SA4.0-red?style=flat",
    link: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },
  //{
  //  badgeUrl:
  //    "https://img.shields.io/badge/%E8%90%8CICP%E5%A4%87-20250810-ff69b4?style=flat",
  //  link: "https://icp.gov.moe/?keyword=20250810",
  //},
//   {
//     badgeUrl:
//       "https://img.shields.io/badge/%E5%8D%81%E5%B9%B4%E4%B9%8B%E7%BA%A6-63D3C9",
//     link: "https://foreverblog.cn",
//   },
//   {
//     badgeUrl: "https://img.shields.io/badge/%E5%BC%80%E5%BE%80-lightgray",
//     link: "https://www.travellings.cn/",
//   },
];
