import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'keepalive-react-router',
  description: 'Route-level keep-alive for React Router',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          {
            text: 'Example',
            link: 'https://github.com/hemengke1997/keepalive-react-router/tree/master/playground',
          },
          {
            text: 'Online Demo',
            link: 'https://keepalive-react-router.vercel.app/',
          },
        ],
        sidebar: [
          {
            text: 'Guides',
            items: [
              {
                text: 'Getting Started',
                link: '/guides/getting-started',
              },
              {
                text: 'Route Transition',
                link: '/guides/route-transition',
              },
              {
                text: 'Scroll Restoration',
                link: '/guides/scroll-restoration',
              },
              {
                text: 'Use Hook',
                link: '/guides/hooks',
              },
            ],
          },
          {
            text: 'Advanced',
            items: [
              {
                text: 'vite-plugin-remix-flat-routes',
                link: '/advanced/vite-plugin-remix-flat-routes',
              },
            ],
          },
        ],
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: {
        nav: [
          {
            text: '示例',
            link: 'https://github.com/hemengke1997/keepalive-react-router/tree/master/playground',
          },
          {
            text: '在线演示',
            link: 'https://keepalive-react-router.vercel.app/',
          },
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              {
                text: '快速开始',
                link: '/zh/guides/getting-started',
              },
              {
                text: '路由动画',
                link: '/zh/guides/route-transition',
              },
              {
                text: '滚动恢复',
                link: '/zh/guides/scroll-restoration',
              },
              {
                text: 'Use Hook',
                link: '/zh/guides/hooks',
              },
            ],
          },
          {
            text: '进阶',
            items: [
              {
                text: 'vite-plugin-remix-flat-routes',
                link: '/zh/advanced/vite-plugin-remix-flat-routes',
              },
            ],
          },
        ],
      },
    },
  },
  base: '/keepalive-react-router/',
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/hemengke1997/keepalive-react-router' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 hemengke1997',
    },
    search: {
      provider: 'local',
    },
    logo: '/logo.svg',
  },
  head: [['link', { rel: 'icon', href: '/keepalive-react-router/logo.svg' }]],
})
