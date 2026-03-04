import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getDataProvider } from "@/lib/data";
import { CompanyCard } from "@/components/company/CompanyCard";
import { CTABanner } from "@/components/layout/CTABanner";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE_URL } from "@/lib/utils";

interface PageProps {
  params: Promise<{ settore: string; citta: string }>;
}

export async function generateStaticParams() {
  const data = getDataProvider();
  const [sectors, cities] = await Promise.all([
    data.getSectors(),
    data.getCities(),
  ]);

  const params: { settore: string; citta: string }[] = [];
  for (const sector of sectors) {
    for (const city of cities) {
      params.push({ settore: sector.slug, citta: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { settore, citta } = await params;
  const data = getDataProvider();
  const [sector, city] = await Promise.all([
    data.getSectorBySlug(settore),
    data.getCityBySlug(citta),
  ]);

  if (!sector || !city) return {};

  const title = `${sector.name} a ${city.name}`;
  const description = `Elenco aziende di ${sector.name.toLowerCase()} a ${city.name}. Trova officine CNC, tornitura e fresatura nella zona di ${city.name}.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Officine Italia`,
      description,
      locale: "it_IT",
      type: "website",
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { settore, citta } = await params;
  const data = getDataProvider();

  const [sector, city, companies] = await Promise.all([
    data.getSectorBySlug(settore),
    data.getCityBySlug(citta),
    data.getCompaniesBySectorAndCity(settore, citta),
  ]);

  if (!sector || !city) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${sector.name} a ${city.name}`,
    description: `Elenco aziende di ${sector.name.toLowerCase()} a ${city.name}`,
    url: `${SITE_URL}/${sector.slug}/${city.slug}`,
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
            <Link
              href={`/${sector.slug}`}
              className="hover:text-white transition"
            >
              {sector.name}
            </Link>
            <span className="mx-2">/</span>
            <span>{city.name}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {sector.name} a {city.name}
          </h1>
          <p className="text-blue-100 text-lg max-w-3xl">
            Elenco aziende di {sector.name.toLowerCase()} a {city.name}. Trova
            officine CNC, tornitura e fresatura nella zona di {city.name}.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {companies.length > 0
              ? `${companies.length} aziend${companies.length === 1 ? "a" : "e"} di ${sector.name.toLowerCase()} a ${city.name}`
              : `Nessuna azienda di ${sector.name.toLowerCase()} a ${city.name}`}
          </h2>

          {companies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companies.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
              <p className="text-gray-600 mb-4">
                Non abbiamo ancora aziende di {sector.name.toLowerCase()} a{" "}
                {city.name} nel nostro database.
              </p>
              <Link
                href={`/${sector.slug}`}
                className="text-blue-700 font-medium hover:text-blue-800 transition"
              >
                Vedi tutte le aziende di {sector.name.toLowerCase()} &rarr;
              </Link>
            </div>
          )}
        </section>

        <CTABanner />
      </div>
    </>
  );
}
