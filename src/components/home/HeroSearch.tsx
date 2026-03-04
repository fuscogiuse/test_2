"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Sector, City } from "@/lib/types";

interface HeroSearchProps {
  sectors: Sector[];
  cities: City[];
}

export function HeroSearch({ sectors, cities }: HeroSearchProps) {
  const router = useRouter();
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleSearch = () => {
    if (selectedSector && selectedCity) {
      router.push(`/${selectedSector}/${selectedCity}`);
    } else if (selectedSector) {
      router.push(`/${selectedSector}`);
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Trova aziende di lavorazioni meccaniche in Italia
        </h1>
        <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          La directory B2B per officine meccaniche, lavorazioni CNC e tornerie.
          Cerca per settore e citt&agrave;.
        </p>

        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleziona settore</option>
              {sectors.map((sector) => (
                <option key={sector.id} value={sector.slug}>
                  {sector.name}
                </option>
              ))}
            </select>

            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleziona citt&agrave;</option>
              {cities.map((city) => (
                <option key={city.id} value={city.slug}>
                  {city.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleSearch}
              disabled={!selectedSector}
              className="w-full px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cerca
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
