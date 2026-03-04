import type { MetadataRoute } from "next";
import { getDataProvider } from "@/lib/data";
import { SITE_URL } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = getDataProvider();
  const [sectors, cities, companies] = await Promise.all([
    data.getSectors(),
    data.getCities(),
    data.getCompanies(),
  ]);

  const urls: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), priority: 1.0 },
  ];

  // Pagine settore
  for (const sector of sectors) {
    urls.push({
      url: `${SITE_URL}/${sector.slug}`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: "weekly",
    });

    // Pagine città per settore
    for (const city of cities) {
      urls.push({
        url: `${SITE_URL}/${sector.slug}/${city.slug}`,
        lastModified: new Date(),
        priority: 0.8,
        changeFrequency: "weekly",
      });
    }
  }

  // Pagine azienda
  for (const company of companies) {
    urls.push({
      url: `${SITE_URL}/azienda/${company.slug}`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "monthly",
    });
  }

  return urls;
}
