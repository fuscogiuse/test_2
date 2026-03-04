import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getDataProvider } from "@/lib/data";
import { CTABanner } from "@/components/layout/CTABanner";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE_URL } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const data = getDataProvider();
  const companies = await data.getCompanies();
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getDataProvider();
  const company = await data.getCompanyBySlug(slug);

  if (!company) return {};

  const title = `${company.name} - ${company.sector.name} a ${company.city.name}`;
  const description =
    company.description ??
    `${company.name} - azienda di ${company.sector.name.toLowerCase()} a ${company.city.name}.`;

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

export default async function CompanyPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getDataProvider();
  const company = await data.getCompanyBySlug(slug);

  if (!company) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description: company.description,
    url: company.website,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city.name,
      addressRegion: company.region,
      addressCountry: "IT",
    },
    sameAs: company.website ? [company.website] : [],
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
              href={`/${company.sector.slug}`}
              className="hover:text-white transition"
            >
              {company.sector.name}
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/${company.sector.slug}/${company.city.slug}`}
              className="hover:text-white transition"
            >
              {company.city.name}
            </Link>
            <span className="mx-2">/</span>
            <span>{company.name}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">{company.name}</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Info principale */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Informazioni azienda
              </h2>

              {company.description && (
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {company.description}
                </p>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Dettagli</h3>

                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm text-gray-500">Settore</dt>
                    <dd>
                      <Link
                        href={`/${company.sector.slug}`}
                        className="text-blue-700 font-medium hover:text-blue-800 transition"
                      >
                        {company.sector.name}
                      </Link>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm text-gray-500">Citt&agrave;</dt>
                    <dd>
                      <Link
                        href={`/${company.sector.slug}/${company.city.slug}`}
                        className="text-blue-700 font-medium hover:text-blue-800 transition"
                      >
                        {company.city.name}
                      </Link>
                    </dd>
                  </div>

                  {company.region && (
                    <div>
                      <dt className="text-sm text-gray-500">Regione</dt>
                      <dd className="text-gray-900">{company.region}</dd>
                    </div>
                  )}

                  {company.website && (
                    <div>
                      <dt className="text-sm text-gray-500">Sito web</dt>
                      <dd>
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-700 font-medium hover:text-blue-800 transition break-all"
                        >
                          {company.website.replace(/^https?:\/\//, "")}
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>

        <CTABanner />
      </div>
    </>
  );
}
