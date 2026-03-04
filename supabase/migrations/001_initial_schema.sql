-- Officine Italia - Schema iniziale

-- Regioni
CREATE TABLE regions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE
);

-- Città
CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  region_id INTEGER NOT NULL REFERENCES regions(id),
  province TEXT NOT NULL
);

-- Settori
CREATE TABLE sectors (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT
);

-- Aziende
CREATE TABLE companies (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  sector_id INTEGER NOT NULL REFERENCES sectors(id),
  city_id INTEGER NOT NULL REFERENCES cities(id),
  region TEXT,
  website TEXT,
  description TEXT,
  source TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indici per performance
CREATE INDEX idx_companies_sector ON companies(sector_id);
CREATE INDEX idx_companies_city ON companies(city_id);
CREATE INDEX idx_companies_slug ON companies(slug);
CREATE INDEX idx_cities_region ON cities(region_id);
CREATE INDEX idx_cities_slug ON cities(slug);
CREATE INDEX idx_sectors_slug ON sectors(slug);

-- Row Level Security (lettura pubblica)
ALTER TABLE regions ENABLE ROW LEVEL SECURITY;
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE sectors ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lettura pubblica regioni" ON regions FOR SELECT USING (true);
CREATE POLICY "Lettura pubblica citta" ON cities FOR SELECT USING (true);
CREATE POLICY "Lettura pubblica settori" ON sectors FOR SELECT USING (true);
CREATE POLICY "Lettura pubblica aziende" ON companies FOR SELECT USING (true);
