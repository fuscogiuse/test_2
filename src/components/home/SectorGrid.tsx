import Link from "next/link";
import type { Sector } from "@/lib/types";

interface SectorGridProps {
  sectors: Sector[];
}

export function SectorGrid({ sectors }: SectorGridProps) {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Settori industriali
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((sector) => (
          <Link
            key={sector.id}
            href={`/${sector.slug}`}
            className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {sector.name}
            </h3>
            {sector.description && (
              <p className="text-gray-600 text-sm line-clamp-2">
                {sector.description}
              </p>
            )}
            <span className="inline-block mt-3 text-blue-700 text-sm font-medium">
              Esplora &rarr;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
