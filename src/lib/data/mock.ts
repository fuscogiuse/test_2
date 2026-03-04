import type {
  DataProvider,
  Region,
  City,
  Sector,
  Company,
  CompanyWithRelations,
} from "../types";

import regionsData from "../../../seed/regions.json";
import citiesData from "../../../seed/cities.json";
import sectorsData from "../../../seed/sectors.json";
import companiesData from "../../../seed/companies.json";

const regions: Region[] = regionsData;
const cities: City[] = citiesData;
const sectors: Sector[] = sectorsData;
const companies: Company[] = companiesData;

function joinCompany(company: Company): CompanyWithRelations {
  const sector = sectors.find((s) => s.id === company.sector_id)!;
  const city = cities.find((c) => c.id === company.city_id)!;
  return { ...company, sector, city };
}

export class MockDataProvider implements DataProvider {
  async getSectors(): Promise<Sector[]> {
    return sectors;
  }

  async getSectorBySlug(slug: string): Promise<Sector | null> {
    return sectors.find((s) => s.slug === slug) ?? null;
  }

  async getCities(): Promise<City[]> {
    return cities;
  }

  async getCityBySlug(slug: string): Promise<City | null> {
    return cities.find((c) => c.slug === slug) ?? null;
  }

  async getRegions(): Promise<Region[]> {
    return regions;
  }

  async getCompanies(): Promise<CompanyWithRelations[]> {
    return companies.map(joinCompany);
  }

  async getCompaniesBySector(
    sectorSlug: string
  ): Promise<CompanyWithRelations[]> {
    const sector = sectors.find((s) => s.slug === sectorSlug);
    if (!sector) return [];
    return companies
      .filter((c) => c.sector_id === sector.id)
      .map(joinCompany);
  }

  async getCompaniesBySectorAndCity(
    sectorSlug: string,
    citySlug: string
  ): Promise<CompanyWithRelations[]> {
    const sector = sectors.find((s) => s.slug === sectorSlug);
    const city = cities.find((c) => c.slug === citySlug);
    if (!sector || !city) return [];
    return companies
      .filter((c) => c.sector_id === sector.id && c.city_id === city.id)
      .map(joinCompany);
  }

  async getCompanyBySlug(slug: string): Promise<CompanyWithRelations | null> {
    const company = companies.find((c) => c.slug === slug);
    if (!company) return null;
    return joinCompany(company);
  }

  async searchCompanies(query: string): Promise<CompanyWithRelations[]> {
    const q = query.toLowerCase();
    return companies
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description?.toLowerCase().includes(q) ||
          cities
            .find((city) => city.id === c.city_id)
            ?.name.toLowerCase()
            .includes(q)
      )
      .map(joinCompany);
  }
}
