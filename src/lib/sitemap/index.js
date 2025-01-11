const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const { baseURL } = require("../helpers");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about-us", changefreq: "weekly", priority: 0.8 },
];

const stream = new SitemapStream({ hostname: baseURL });
streamToPromise(stream).then((data) =>
  fs.writeFileSync("./public/sitemap.xml", data)
);

links.forEach((link) => stream.write(link));
stream.end();
