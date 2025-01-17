import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Doc Detective",
  tagline: "Keep your docs in sync with your product. Always.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://doc-detective.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "doc-detective", // Usually your GitHub org/user name.
  projectName: "doc-detective.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.dev/doc-detective/doc-detective.github.io/blob/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.dev/doc-detective/doc-detective.github.io/blob/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Doc Detective",
      logo: {
        alt: "Doc Detective Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Get started",
        },
        {
          type: "docSidebar",
          sidebarId: "referencesSidebar",
          position: "left",
          label: "References",
        },
        { to: "/app", label: "Action Builder (beta)", position: "left" },
        // {to: '/blog', label: 'Blog', position: 'left'},
        { to: "/support", label: "Support ❤️", position: "right" },
        { type: "docSidebar", sidebarId: "contributeSidebar", position: "right", label: "Contribute" },
        {
          href: "https://github.com/doc-detective",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Get started",
              to: "/docs/get-started",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/2M7wXEThfF",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/doc-detective",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: "GitHub",
              href: "https://github.com/doc-detective",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Doc Detective.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [require.resolve('./src/plugins/webpack-browserify')],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
