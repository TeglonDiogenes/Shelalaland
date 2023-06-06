  const anchors_plugin = require('@orchidjs/eleventy-plugin-ids');
// .eleventy.js
const mdOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
}
const mdAnchorOpts = {
  permalink: true,
  permalinkClass: 'anchor-link',
  permalinkSymbol: '#',
  level: [1, 2, 3, 4]
}

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const metagen = require('eleventy-plugin-metagen');

  const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const pluginTOC = require('eleventy-plugin-toc')
// .eleventy.js

module.exports = eleventyConfig => {
  // Markdown
  eleventyConfig.setLibrary(
    'md',
    markdownIt().use(markdownItAnchor)
  )
eleventyConfig.addPlugin( eleventyNavigationPlugin );
  eleventyConfig.addPlugin(pluginTOC)
    eleventyConfig.addPlugin(anchors_plugin);
    eleventyConfig.addPlugin(metagen);
    
  // ... your other Eleventy config options
}
