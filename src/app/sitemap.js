export default async function sitemap() {
  const baseUrl = "https://www.sijma.store";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: "2026-02-15",
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/shahidul-islam-jony`,
      lastModified: "2026-02-15",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/myprojects`,
      lastModified: "2026-02-15",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
