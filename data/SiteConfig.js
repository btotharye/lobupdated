const config = {
  siteTitle: "Life of Brian", // Site title.
  siteTitleShort: "Life of Brian", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Life of Brian", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.btotharye.com", // Domain of your website without pathPrefix.
  pathPrefix: "/life-of-brian", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription:
    "A blog about essential oils, healthy living, and nerdy things.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Essential Oils", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "br1anhopkins", // Username to display in the author segment.
  userEmail: "btotharye@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "br1anhopkins", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Clayton, NC", // User location to display in the author segment.
  userAvatar:
    "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/59632157_423395991810935_9085921345237155840_n.jpg?_nc_cat=111&_nc_ht=scontent-iad3-1.xx&oh=641893a828e29ec72cd0d1a9dc64a431&oe=5D612059", // User avatar to display in the author segment.
  userDescription:
    "I'm a software engineer by day and am trying to get healthier and live a heathly lifestyle.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "FaceBook",
      url: "https://www.facebook.com/Oils-For-Nerds-423227251827809",
      iconClassName: "fa fa-facebook"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/br1anhopkins",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:btotharye@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Brian Hopkins" // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
