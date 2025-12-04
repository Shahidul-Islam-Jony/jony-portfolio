export default async function sitemap() {
  const baseUrl = "https://sijmabd.com";

  return [
    {
      url: `https://sijma.store`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `https://sijma.store/shahidul-islam-jony`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `https://sijma.store/myprojects`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    }
  ];
}
