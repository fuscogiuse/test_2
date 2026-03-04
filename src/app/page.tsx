import { getDataProvider } from "@/lib/data";
import { HeroSearch } from "@/components/home/HeroSearch";
import { SectorGrid } from "@/components/home/SectorGrid";
import { CityGrid } from "@/components/home/CityGrid";
import { CTABanner } from "@/components/layout/CTABanner";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/utils";

export default async function HomePage() {
  const data = getDataProvider();
  const [sectors, cities] = await Promise.all([
    data.getSectors(),
    data.getCities(),
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/ricerca?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <HeroSearch sectors={sectors} cities={cities} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectorGrid sectors={sectors} />
        <CityGrid cities={cities} />
        <CTABanner />
      </div>
    </>
  );
}
