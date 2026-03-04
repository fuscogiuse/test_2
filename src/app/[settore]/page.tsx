import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getDataProvider } from "@/lib/data";
import { CompanyCard } from "@/components/company/CompanyCard";
import { CTABanner } from "@/components/layout/CTABanner";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE_URL } from "@/lib/utils";

interface PageProps {
  params: Promise<{ settore: string }>;
}

export async function generateStaticParams() {
  const data = getDataProvider();
  const sectors = await data.getSectors();
  return sectors.map((s) => ({ settore: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { settore } = await params;
  const data = getDataProvider();
  const sector = await data.getSectorBySlug(settore);

  if (!sector) return {};

  return {
    title: `${sector.name} in Italia`,
    description: `Trova le migliori aziende di ${sector.name.toLowerCase()} in Italia. Elenco completo di officine e fornitori per regione e città.`,
    openGraph: {
      title: `${sector.name} in Italia | Officine Italia`,
      description: `Directory di ${sector.name.toLowerCase()} in Italia`,
      locale: "it_IT",
      type: "website",
    },
  };
}

export default async function SectorPage({ params }: PageProps) {
  const { settore } = await params;
  const data = getDataProvider();

  const [sector, cities, companies] = await Promise.all([
    data.getSectorBySlug(settore),
    data.getCities(),
    data.getCompaniesBySector(settore),
  ]);

  if (!sector) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${sector.name} in Italia`,
    description: sector.description,
    url: `${SITE_URL}/${sector.slug}`,
    numberOfItems: companies.length,
    itemListElement: companies.map((company, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/azienda/${company.slug}`,
      name: company.name,
    })),
  };

  return (
    <>
      <StructuredData data={structuredData} />

      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-blue-200 text-sm mb-4">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>{sector.name}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {sector.name} in Italia
          </h1>
          {sector.description && (
            <p className="text-blue-100 text-lg max-w-3xl">
              {sector.description}
            </p>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Città */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Cerca per citt&agrave;
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {cities.map((city) => (
              <Link
                key={city.id}
                href={`/${sector.slug}/${city.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-3 text-center hover:shadow-md hover:border-blue-300 transition-all text-sm"
              >
                <span className="font-medium text-gray-900">{city.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Aziende */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Aziende di {sector.name.toLowerCase()} ({companies.length})
          </h2>
          {companies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              Nessuna azienda trovata in questo settore.
            </p>
          )}
        </section>

        <CTABanner />
      </div>
    </>
  );
}
