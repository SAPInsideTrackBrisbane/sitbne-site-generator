module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "sitbne", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "SAP Inside Track Brisbane", // Site title.
  siteTitleAlt: "SAP Inside Track Brisbane", // Alternative site title for SEO.
  siteLogo:
    "/logos/sap-logo-svg.svg", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://sitbne.github", // Domain of your website without pathPrefix.
  pathPrefix: ".io", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "A local grassroots community event organised where SCN members come together to share knowledge, expertise and network", // Website description used for RSS feeds/meta description tag.
  siteBanner:
    "Register now for our upcoming event on November 15th",
  siteBannerUrl:
    "/november-2018",
  siteCover:
    "/images/Brisbane-Logo-Very-Plain.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Sitbne User", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  //googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/sitbne",
    "https://twitter.com/search?q=sitbne",
    "mailto:sitbne@gmail.com"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/sitbne",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "Twitter",
      url: "https://twitter.com/search?q=sitbne",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
      url: "mailto:sitbne@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    },
    {
      label: "Keen to Speak",
      url: "/keen-to-speak"
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "SITBNE", // Label used before the year
     year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
