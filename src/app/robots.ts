export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/word/"],
      },
    ],
    // sitemap: "https://yourdomain.com/sitemap.xml",
  };
}