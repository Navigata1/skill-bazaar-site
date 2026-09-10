import type { MetadataRoute } from "next";
import { CANONICAL, entries } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", ...entries.map((entry) => `/skills/${entry.id}`)].map(
    (path) => ({ url: `${CANONICAL}${path}` }),
  );
}
