import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CodeBox",
  description: "A VitePress Site",

  lastUpdated: true,
  cleanUrls: true,

  // sitemap: {
  //   hostname: 'https://vitepress.dev',
  //   transformItems(items) {
  //     return items.filter((item) => !item.url.includes('migration'))
  //   }
  // },

  // /* prettier-ignore */
  // head: [
  //   ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
  //   ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
  //   ['meta', { name: 'theme-color', content: '#5f67ee' }],
  //   ['meta', { name: 'og:type', content: 'website' }],
  //   ['meta', { name: 'og:locale', content: 'en' }],
  //   ['meta', { name: 'og:site_name', content: 'VitePress' }],
  //   ['meta', { name: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }],
  //   ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
  // ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/vitepress-logo-mini.svg",
    siteTitle: "CodeBox",
    nav: nav(),

    sidebar: {
      '/docs/guide/': { base: '/docs/guide/', items: sidebarGuide() },
      '/docs/reference/': { base: '/docs/reference/', items: sidebarReference() }
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'x', link: 'https://x.com/' },
      // { icon: 'discord', link: 'https://discord.com/' },
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'vitepress'
      }
    },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    footer: {
      message: 'Made with ❤️ by CodeBox',
      copyright: 'Copyright © 2023-present CodeBox'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/docs/guide/what-is-vitepress',
      activeMatch: '/docs/guide/'
    },
    {
      text: 'Reference',
      link: '/docs/reference/site-config',
      activeMatch: '/docs/reference/'
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is VitePress?', link: 'what-is-vitepress' },
        { text: 'Getting Started', link: 'getting-started' },
        { text: 'Routing', link: 'routing' },
        { text: 'Deploy', link: 'deploy' }
      ]
    },
    {
      text: 'Writing',
      collapsed: false,
      items: [
        { text: 'Markdown Extensions', link: 'markdown' },
        { text: 'Asset Handling', link: 'asset-handling' },
        { text: 'Frontmatter', link: 'frontmatter' },
        { text: 'Using Vue in Markdown', link: 'using-vue' },
        { text: 'Internationalization', link: 'i18n' }
      ]
    },
    {
      text: 'Customization',
      collapsed: false,
      items: [
        { text: 'Using a Custom Theme', link: 'custom-theme' },
        { text: 'Extending the Default Theme', link: 'extending-default-theme' },
        { text: 'Build-Time Data Loading', link: 'data-loading' },
        { text: 'SSR Compatibility', link: 'ssr-compat' },
        { text: 'Connecting to a CMS', link: 'cms' }
      ]
    },
    {
      text: 'Experimental',
      collapsed: false,
      items: [
        { text: 'MPA Mode', link: 'mpa-mode' },
        { text: 'Sitemap Generation', link: 'sitemap-generation' }
      ]
    },
    { text: 'Config & API Reference', base: '/docs/reference/', link: 'site-config' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: 'site-config' },
        { text: 'Frontmatter Config', link: 'frontmatter-config' },
        { text: 'Runtime API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: 'Default Theme',
          base: '/docs/reference/default-theme-',
          items: [
            { text: 'Overview', link: 'config' },
            { text: 'Nav', link: 'nav' },
            { text: 'Sidebar', link: 'sidebar' },
            { text: 'Home Page', link: 'home-page' },
            { text: 'Footer', link: 'footer' },
            { text: 'Layout', link: 'layout' },
            { text: 'Badge', link: 'badge' },
            { text: 'Team Page', link: 'team-page' },
            { text: 'Prev / Next Links', link: 'prev-next-links' },
            { text: 'Edit Link', link: 'edit-link' },
            { text: 'Last Updated Timestamp', link: 'last-updated' },
            { text: 'Search', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}