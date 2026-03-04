export interface Region {
  id: number;
  name: string;
  slug: string;
}

export interface City {
  id: number;
  name: string;
  slug: string;
  region_id: number;
  province: string;
}

export interface Sector {
  id: number;
  name: string;
  slug: string;
  description: string | null;
}

export interface Company {
  id: number;
  name: string;
  slug: string;
  sector_id: number;
  city_id: number;
  region: string | null;
  website: string | null;
  description: string | null;
  source: string | null;
  created_at: string;
}

export interface CompanyWithRelations extends Company {
  sector: Sector;
  city: City;
}

export interface DataProvider {
  getSectors(): Promise<Sector[]>;
  getSectorBySlug(slug: string): Promise<Sector | null>;
  getCities(): Promise<City[]>;
  getCityBySlug(slug: string): Promise<City | null>;
  getRegions(): Promise<Region[]>;
  getCompanies(): Promise<CompanyWithRelations[]>;
  getCompaniesBySector(sectorSlug: string): Promise<CompanyWithRelations[]>;
  getCompaniesBySectorAndCity(
    sectorSlug: string,
    citySlug: string
  ): Promise<CompanyWithRelations[]>;
  getCompanyBySlug(slug: string): Promise<CompanyWithRelations | null>;
  searchCompanies(query: string): Promise<CompanyWithRelations[]>;
}
