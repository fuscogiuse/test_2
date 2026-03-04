import type { DataProvider } from "../types";
import { MockDataProvider } from "./mock";

let provider: DataProvider | null = null;

export function getDataProvider(): DataProvider {
  if (provider) return provider;

  // Per usare Supabase in produzione:
  // 1. npm install @supabase/supabase-js
  // 2. Configurare .env.local con NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY
  // 3. Sostituire MockDataProvider con SupabaseDataProvider da "./supabase"
  provider = new MockDataProvider();

  return provider;
}
