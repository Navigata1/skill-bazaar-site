import inventory from "@/public/inventory.json";
import { validateCatalog, type Entry, type CatalogEntry } from "./catalog";
export const entries: Entry[] = inventory.entries;
validateCatalog(entries);
// Install preparation belongs to server-only detail pages, not the filter payload.
export const catalogEntries: CatalogEntry[] = entries.map((entry) => ({
  id: entry.id,
  name: entry.name,
  repo: entry.repo,
  branch: entry.branch,
  kind: entry.kind,
  access: entry.access,
  license: entry.license,
  outcomes: entry.outcomes,
  description: entry.description,
  includes: entry.includes,
}));
export const reviewedAt = inventory.reviewedAt;
export const CANONICAL = "https://skill-bazaar.islanddevcrew.app";
export const CONTACT = "hello@islanddevcrew.com";
