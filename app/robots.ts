import type { MetadataRoute } from "next";
import { CANONICAL } from "@/lib/data";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${CANONICAL}/sitemap.xml`,
  };
}
