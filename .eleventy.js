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

  eleventyConfig.on("eleventy.before", ({ dir }) => {
    const fs = require("fs");
    const path = `${dir.output}/assets/sass/vha/path-prefix.scss`;
    const isProduction = process.env.NODE_ENV === "production";
    const pathPrefix = isProduction ? "/simlearn/" : "/";
  
    // Read the existing file (if it exists)
    const scssContent = `$path-prefix: "${pathPrefix}";\n`;
    let shouldUpdate = true;
  
    if (fs.existsSync(path)) {
      const existingContent = fs.readFileSync(path, "utf8");
      if (existingContent === scssContent) {
        shouldUpdate = false; // Skip writing if content hasn't changed
      }
    }
  
    if (shouldUpdate) {
      fs.writeFileSync(path, scssContent);
      console.log(`✅ Updated path-prefix.scss with pathPrefix: "${pathPrefix}"`);
    }
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
