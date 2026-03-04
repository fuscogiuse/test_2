export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[àáâãäå]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôõö]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatSectorName(slug: string): string {
  return slug
    .split("-")
    .map((word) => capitalize(word))
    .join(" ");
}

export const SITE_NAME = "Officine Italia";
export const SITE_URL = "https://officineitalia.it";
export const SITE_DESCRIPTION =
  "Directory B2B italiana per lavorazioni meccaniche e officine CNC. Trova aziende di lavorazioni meccaniche in tutta Italia.";
