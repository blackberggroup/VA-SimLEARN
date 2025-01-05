module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  
  eleventyConfig.addShortcode("assetPath", function (page) {
    const depth = (page.url.match(/\//g) || []).length - 1;
    return "../".repeat(depth) + "assets/";
  });

  eleventyConfig.addShortcode("currentPageUrl", function (page) {
    if (!page || !page.url) {
      return ""; // Return an empty string if `page` is undefined
    }
    return page.url;
  });

  return {
    pathPrefix: "/",
    trailingSlash: "always",
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dir: {
      layouts: "_layouts",
      data: "_data",
    },
  };
};
