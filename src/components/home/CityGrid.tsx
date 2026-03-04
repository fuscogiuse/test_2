import Link from "next/link";
import type { City } from "@/lib/types";

interface CityGridProps {
  cities: City[];
  sectorSlug?: string;
}

export function CityGrid({ cities, sectorSlug = "lavorazioni-meccaniche" }: CityGridProps) {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Citt&agrave; principali
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {cities.map((city) => (
          <Link
            key={city.id}
            href={`/${sectorSlug}/${city.slug}`}
            className="block bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md hover:border-blue-300 transition-all"
          >
            <span className="font-medium text-gray-900">{city.name}</span>
            <span className="block text-xs text-gray-500 mt-1">
              {city.province}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
