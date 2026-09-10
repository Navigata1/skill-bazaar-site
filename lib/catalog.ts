export const OUTCOMES = [
  "All",
  "Build",
  "Verify",
  "Memory",
  "Research",
  "Orchestrate",
] as const;
export type Outcome = (typeof OUTCOMES)[number];
export type Entry = {
  id: string;
  name: string;
  repo: string;
  branch: string;
  kind: string;
  access: string;
  license: string;
  outcomes: string[];
  description: string;
  start: string;
  caution: string;
  guidePath: string;
  licensePath: string;
  includes?: { name: string; path: string }[];
};
const REPO = /^(Island-Dev-Crew|Navigata1)\/[a-zA-Z0-9][a-zA-Z0-9_.-]*$/;
const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
export type CatalogEntry = Omit<
  Entry,
  "start" | "caution" | "guidePath" | "licensePath"
>;

export function sourceUrl(
  entry: Pick<Entry, "repo" | "branch">,
  file?: string,
): string {
  if (!REPO.test(entry.repo))
    throw new Error("Repository must be an approved GitHub source");
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/.test(entry.branch))
    throw new Error("Invalid source branch");
  const base = `https://github.com/${entry.repo}`;
  if (!file) return base;
  if (
    file.startsWith("/") ||
    file.split("/").some((part) => !part || part === "." || part === "..") ||
    /[\\?#\x00-\x1f]/.test(file)
  )
    throw new Error("Invalid source document path");
  return `${base}/blob/${entry.branch}/${file.split("/").map(encodeURIComponent).join("/")}`;
}
export function validateCatalog(entries: Entry[]): void {
  if (!entries.length) throw new Error("Catalog must not be empty");
  const ids = new Set<string>();
  const repos = new Set<string>();
  for (const entry of entries) {
    if (!ID.test(entry.id) || ids.has(entry.id))
      throw new Error("Invalid or duplicate catalog ID");
    if (repos.has(entry.repo.toLowerCase()))
      throw new Error("Duplicate repository listing");
    ids.add(entry.id);
    repos.add(entry.repo.toLowerCase());
    for (const key of [
      "name",
      "kind",
      "access",
      "license",
      "description",
      "start",
      "caution",
    ] as const) {
      if (typeof entry[key] !== "string" || !entry[key].trim())
        throw new Error(`Missing ${key}`);
    }
    if (
      !entry.outcomes.length ||
      entry.outcomes.some(
        (outcome) =>
          !OUTCOMES.slice(1).includes(outcome as Exclude<Outcome, "All">),
      )
    )
      throw new Error("Invalid outcome");
    sourceUrl(entry, entry.guidePath);
    sourceUrl(entry, entry.licensePath);
    for (const child of entry.includes ?? []) sourceUrl(entry, child.path);
  }
}
export function filterEntries<T extends CatalogEntry>(
  entries: T[],
  query: string,
  outcome: Outcome,
): T[] {
  const terms = query
    .normalize("NFKC")
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return entries.filter((entry) => {
    const haystack = [
      entry.name,
      entry.description,
      entry.kind,
      entry.repo,
      entry.license,
      ...entry.outcomes,
      ...(entry.includes ?? []).map((child) => child.name),
    ]
      .join(" ")
      .normalize("NFKC")
      .toLowerCase();
    return (
      (outcome === "All" || entry.outcomes.includes(outcome)) &&
      terms.every((term) => haystack.includes(term))
    );
  });
}
