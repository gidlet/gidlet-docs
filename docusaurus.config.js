const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Gidlet',
  tagline:
    'Within minutes, Orca gives you all the core features for building a community app, which is beautifully designed, easy to use, and ready to scale.',
  url: 'https://www.gidlet.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Gidlet', // Usually your GitHub org/user name.
  projectName: 'gidlet', // Usually your repo name.
  url: 'https://www.gidlet.com',
  trailingSlash: false,
  themeConfig: {
    image: 'https://res.cloudinary.com/dkkf9iqnd/image/upload/v1634034591/community/social.jpg',
    gtag: {
      trackingID: 'G-YZ7SW2ED5J',
    },
    colorMode: {
      switchConfig: {
        darkIcon: '☽',
        darkIconStyle: {
          color: '#fff',
        },
        lightIcon: '☼',
        lightIconStyle: {
          color: '#fff',
        },
      },
    },
    footer: {
      links: [
        {
          title: 'Getting Started',
          items: [
            {
              label: 'Installation',
              to: 'docs/getting-started/installation',
            },
            {
              label: 'Configuration',
              to: 'docs/getting-started/configuration',
            },
          ],
        },
        {
          title: 'Deployment',
          items: [
            {
              label: 'Production mode',
              to: 'docs/deployment/production-mode',
            },
            {
              label: 'Deployment options',
              to: 'docs/deployment/deployment',
            },
          ],
        },
        {
          title: 'Contributing',
          items: [
            {
              label: 'Contributing guide',
              to: 'docs/contributing',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/elevensymbols/orca',
            },
            {
              label: 'Orca Community',
              href: 'https://community.getorca.org/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://www.gidlet.com" class="footer-link" target="__blank" rel="noreferrer noopener">Gidlet</a>`,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Orca Logo',
        src: 'img/logo-full.png',
        srcDark: 'img/logo-full-dark.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started/installation',
          position: 'right',
          label: 'Docs',
        },
        {
          href: 'https://community.getorca.org/',
          label: 'Demo',
          position: 'right',
        },
        {
          href: 'https://github.com/elevensymbols/orca',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/elevensymbols/getorca.org/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
