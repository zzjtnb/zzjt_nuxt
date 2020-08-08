const fs = require('fs')
const fm = require('front-matter');//https://github.com/jxson/front-matter
const md = require('markdown-it')();// https://markdown-it.docschina.org/

var realSlug = function (slug, isSlugUseDate) {
  var result = "";
  if (isSlugUseDate) {
    result = slug + ".md";
  } else {
    var files = fs.readdirSync(config.blogPath);
    var slugs = files.map(function (e) {
      return e.substring(11, e.length);
    });
    for (let i = 0; i < slugs.length; i++) {
      if (slugs[i] == slug + ".md") {
        result = files[i];
        break;
      }
    }
  }
  return result;
}
var linkSlug = function (filename, isSlugUseDate) {
  if (isSlugUseDate) {
    return filename.substring(0, filename.length - 3);
  } else {
    return filename.substring(11, filename.length - 3);
  }
}

var singleBlog = function (fullPath, slug, isContentRequired, isMD, isDev) {
  var blog = {};
  var content = fm(fs.readFileSync(fullPath, "utf8"));
  blog = content.attributes;
  blog.slug = slug;
  blog.date = fullPath.replace(config.blogPath + "\\", "").replace("-" + slug, "").replace(".md", "");
  if (isContentRequired && !isMD) {
    let html = md.render('@[toc]( )\n' + content.body);
    // add class "hljs" for dark theme rendering
    if (isDev) {
      html = html.replace(/src=\"(\/)?img/g, "src=\"http://127.0.0.1:4000/img");
    }
    blog.content = html.replace(/\<pre/g, "<pre class='hljs'");
  } else if (isContentRequired && isMD) {
    blog.content = content.body;
  }
  return blog;
}
module.exports = {
  realSlug, linkSlug, singleBlog
}
