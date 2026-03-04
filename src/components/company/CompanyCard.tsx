import Link from "next/link";
import type { CompanyWithRelations } from "@/lib/types";

interface CompanyCardProps {
  company: CompanyWithRelations;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900">
          <Link
            href={`/azienda/${company.slug}`}
            className="hover:text-blue-700 transition"
          >
            {company.name}
          </Link>
        </h3>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {company.sector.name}
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
          {company.city.name}
        </span>
      </div>

      {company.description && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {company.description}
        </p>
      )}

      <div className="flex items-center justify-between">
        <Link
          href={`/azienda/${company.slug}`}
          className="text-blue-700 text-sm font-medium hover:text-blue-800 transition"
        >
          Vedi dettagli &rarr;
        </Link>
        {company.website && (
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm hover:text-gray-600 transition"
          >
            Sito web
          </a>
        )}
      </div>
    </div>
  );
}
