// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hi, I\'m Mitchell Mudd!',
  tagline: 'A Web Developer :)',
  url: 'https://mitchellmudd.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/logo_transparent.png',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Mitchell Mudd',
        logo: {
          alt: 'Mitchell Mudd portfolio logo',
          src: 'img/logo_transparent.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Skills/My Favorite Tech Stack',
            position: 'left',
            label: 'Skills',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/mitchelldirt',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Mastadon',
                href: 'https://fosstodon.org/@mitchelldirt',
                rel: 'me'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/mitchelldirt',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/mitchellmudd/',
              },
              {
                label: 'Hashnode',
                href: 'https://hashnode.com/@mitchelldirt',
              },
              {
                label: 'Email Me',
                href: 'mailto:developer@mitchellmudd.dev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Skills',
                to: '/docs/Skills/My%20Favorite%20Tech%20Stack',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mitchelldirt',
              },
            ],
          },
        ],
        copyright: `Proudly built with Docusaurus. <img style='height: 16px; width: 16px;' src='img/docusaurus.png' />`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
