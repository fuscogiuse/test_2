import { supabase } from "../supabase/client";
import type {
  DataProvider,
  Region,
  City,
  Sector,
  CompanyWithRelations,
} from "../types";

export class SupabaseDataProvider implements DataProvider {
  async getSectors(): Promise<Sector[]> {
    const { data } = await supabase
      .from("sectors")
      .select("*")
      .order("name");
    return data ?? [];
  }

  async getSectorBySlug(slug: string): Promise<Sector | null> {
    const { data } = await supabase
      .from("sectors")
      .select("*")
      .eq("slug", slug)
      .single();
    return data;
  }

  async getCities(): Promise<City[]> {
    const { data } = await supabase
      .from("cities")
      .select("*")
      .order("name");
    return data ?? [];
  }

  async getCityBySlug(slug: string): Promise<City | null> {
    const { data } = await supabase
      .from("cities")
      .select("*")
      .eq("slug", slug)
      .single();
    return data;
  }

  async getRegions(): Promise<Region[]> {
    const { data } = await supabase
      .from("regions")
      .select("*")
      .order("name");
    return data ?? [];
  }

  async getCompanies(): Promise<CompanyWithRelations[]> {
    const { data } = await supabase
      .from("companies")
      .select("*, sector:sectors(*), city:cities(*)")
      .order("name");
    return data ?? [];
  }

  async getCompaniesBySector(
    sectorSlug: string
  ): Promise<CompanyWithRelations[]> {
    const { data } = await supabase
      .from("companies")
      .select("*, sector:sectors!inner(*), city:cities(*)")
      .eq("sector.slug", sectorSlug)
      .order("name");
    return data ?? [];
  }

  async getCompaniesBySectorAndCity(
    sectorSlug: string,
    citySlug: string
  ): Promise<CompanyWithRelations[]> {
    const { data } = await supabase
      .from("companies")
      .select("*, sector:sectors!inner(*), city:cities!inner(*)")
      .eq("sector.slug", sectorSlug)
      .eq("city.slug", citySlug)
      .order("name");
    return data ?? [];
  }

  async getCompanyBySlug(slug: string): Promise<CompanyWithRelations | null> {
    const { data } = await supabase
      .from("companies")
      .select("*, sector:sectors(*), city:cities(*)")
      .eq("slug", slug)
      .single();
    return data;
  }

  async searchCompanies(query: string): Promise<CompanyWithRelations[]> {
    const { data } = await supabase
      .from("companies")
      .select("*, sector:sectors(*), city:cities(*)")
      .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
      .order("name")
      .limit(20);
    return data ?? [];
  }
}
