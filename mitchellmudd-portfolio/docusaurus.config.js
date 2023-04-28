// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const GitHubIcon = require('@material-ui/icons/GitHub').default;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hallo, I'm Mitchell Mudd!",
  tagline: 'A Software Developer :)',
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
    locales: ['en', 'nl'],
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
          blogTitle: 'Mudd Tech Blog',
          blogDescription: 'A blog about web development and whatever other programming things I\'m exploring :)',
          blogSidebarCount: 10,
          feedOptions: {
            title: 'Mudd Tech Blog',
            description: 'A blog about web development and whatever other programming things I\'m exploring :)',
            type: 'all',
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
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
            docId: 'Skills/My-Favorite-Tech-Stack',
            position: 'left',
            label: 'Skills',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/projects', label: 'Projects', position: 'left' },
          {
            href: 'https://github.com/mitchelldirt',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            html: `
            <a
            target='_blank'
            href='https://www.linkedin.com/in/mitchellmudd/'
            aria-label='source code'
            className='link link--icon'
          >
            <svg class="footerIcon" height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="g5891"><path d="M512,64c0,-35.323 -28.677,-64 -64,-64l-384,0c-35.323,0 -64,28.677 -64,64l0,384c0,35.323 28.677,64 64,64l384,0c35.323,0 64,-28.677 64,-64l0,-384Z" id="background" style="fill:#2867b2;"/><g id="shapes"><rect height="257.962" id="rect11" style="fill:#fff;" width="85.76" x="61.053" y="178.667"/><path d="M104.512,54.28c-29.341,0 -48.512,19.29 -48.512,44.573c0,24.752 18.588,44.574 47.377,44.574l0.554,0c29.903,0 48.516,-19.822 48.516,-44.574c-0.555,-25.283 -18.611,-44.573 -47.935,-44.573Z" id="path13-0" style="fill:#fff;fill-rule:nonzero;"/><path d="M357.278,172.601c-45.49,0 -65.866,25.017 -77.276,42.589l0,-36.523l-85.738,0c1.137,24.197 0,257.961 0,257.961l85.737,0l0,-144.064c0,-7.711 0.554,-15.42 2.827,-20.931c6.188,-15.4 20.305,-31.352 43.993,-31.352c31.012,0 43.436,23.664 43.436,58.327l0,138.02l85.741,0l0,-147.93c0,-79.237 -42.305,-116.097 -98.72,-116.097Z" id="path15" style="fill:#fff;fill-rule:nonzero;"/></g></g></svg>
            </a>`
          },
          {
            html: `
            <a
          target='_blank'
          href='mailto:developer@mitchellmudd.dev'
          aria-label='source code'
          className='link link--icon'
        >
            <svg class="footerIcon-Email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          </a>
          `
          },
          {
            html: `<a
          target='_blank'
          href='https://www.github.com/mitchelldirt'
          aria-label='source code'
          className='link link--icon'
        >
       <svg color="currentColor" class="footerIcon-GitHub" height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" fill-rule="evenodd" clip-rule="evenodd" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path class="st0" d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z"/></g></svg>
        </a>`}
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
