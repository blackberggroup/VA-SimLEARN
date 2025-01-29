require("dotenv").config(); // Load environment variables from .env

module.exports = function (eleventyConfig) {
  // Determine the environment
  const isProduction = process.env.NODE_ENV === "production";

  // Set the path prefix dynamically
  const pathPrefix = isProduction ? "/simlearn/" : "/";

  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy({
    "assets": "assets", // Copy assets to the same directory
    "!src/sass/**": false, // Explicitly exclude the SCSS directory
  });

  eleventyConfig.addShortcode("assetPath", function () {
    return pathPrefix;
  });

  // Return Eleventy configuration
  return {
    pathPrefix: pathPrefix, // Use pathPrefix for production URLs
    trailingSlash: "always", // Ensure trailing slashes
    dir: {
      output: "_site",      // Always build to _site
      includes: "_includes", // Includes directory
      data: "_data",         // Data directory
    },
    templateFormats: ["md", "njk", "html", "liquid"], // Supported template formats
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
  };
};
