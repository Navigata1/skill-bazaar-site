import { NextResponse, type NextRequest } from "next/server";
import inventory from "./public/inventory.json";

const knownSlugs = new Set(inventory.entries.map((entry) => entry.id));

export function proxy(request: NextRequest) {
  let slug = "";
  try {
    slug = decodeURIComponent(
      request.nextUrl.pathname.slice("/skills/".length),
    );
  } catch {
    // Invalid encoded paths use the same local recovery response.
  }
  if (knownSlugs.has(slug)) return NextResponse.next();

  // Next 16.3.4 can return a hydration-only shell when a dynamic page throws
  // notFound(). Route unknown IDs to the ordinary unmatched-route renderer
  // before streaming; preserve the requested URL and a real HTTP 404.
  const recovery = request.nextUrl.clone();
  recovery.pathname = "/__catalog_not_found__";
  recovery.search = "";
  return NextResponse.rewrite(recovery, { status: 404 });
}

export const config = { matcher: "/skills/:path*" };
