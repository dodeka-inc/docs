/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Dodeká',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/logotipo-dodeka.png',
    infoLink: 'https://www.dodeka.com.br',
    pinned: true
  }
]

const siteConfig = {
  algolia: {
    apiKey: 'a2d7ddd911b6ff2441d893713bfb2cea',
    indexName: 'rocketseat',
    placeholder: 'Buscar',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  cname: 'docs.dodeka.com.br',

  docsUrl: '',

  stylesheets: [
    'https://fonts.googleapis.com/css?family=Noto+Sans:400,700',
    'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
  ],

  title: 'Dodeká Docs', // Title for your website.
  tagline: 'Documentação de guias da Dodeká',
  //url: 'https://dodeka.com.br', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  url: 'https://dodeka-inc.github.io',
  baseUrl: '/',

  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'dodeka-inc',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    //{ page: 'contribua', label: 'Contribua' },
    //{ page: 'comunidade', label: 'Comunidade' }
    // { doc: 'ambiente-react-native/ambiente/introducao', label: 'Docs' }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logotipo-dodeka.png',
  footerIcon: 'img/logotipo-dodeka.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    //primaryColor: '#7159c1',
    //secondaryColor: '#6C4FBB'
    primaryColor: '#7159c1',
    secondaryColor: '#6C4FBB'
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Dodeka`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'dracula'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://unpkg.com/feather-icons',
    '/js/script.js'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/logotipo-dodeka.png',
  twitterImage: 'img/logotipo-dodeka.png'

  //docsSideNavCollapsible: true

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
}

module.exports = siteConfig
