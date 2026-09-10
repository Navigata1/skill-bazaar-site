"use client";
import Link from "next/link";
import { useState } from "react";
import {
  filterEntries,
  OUTCOMES,
  sourceUrl,
  type CatalogEntry,
  type Outcome,
} from "@/lib/catalog";
import { Arrow } from "./icon";
export function Catalog({ entries }: { entries: CatalogEntry[] }) {
  const [query, setQuery] = useState("");
  const [outcome, setOutcome] = useState<Outcome>("All");
  const visible = filterEntries(entries, query, outcome);
  const filtered = !!query || outcome !== "All";
  const clear = () => {
    setQuery("");
    setOutcome("All");
  };
  return (
    <>
      <div className="catalog-controls">
        <label className="search">
          <span className="sr-only">Search by skill, outcome, or tool</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="10.5" cy="10.5" r="7" />
            <path d="m16 16 5 5" />
          </svg>
          <input
            type="search"
            placeholder="Search by skill, outcome, or tool"
            value={query}
            maxLength={160}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="filters" role="group" aria-label="Filter by outcome">
          {OUTCOMES.map((value) => (
            <button
              type="button"
              key={value}
              aria-pressed={value === outcome}
              onClick={() => setOutcome(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className="catalog-status">
        <p aria-live="polite" aria-atomic="true">
          {visible.length} {visible.length === 1 ? "entry" : "entries"}
          {filtered
            ? ` matching${outcome !== "All" ? ` ${outcome.toLowerCase()}` : ""}${query ? ` “${query}”` : ""}`
            : " · editorially selected, not ranked by popularity"}
        </p>
        {filtered && (
          <button type="button" className="text-button" onClick={clear}>
            Clear filters
          </button>
        )}
      </div>
      <noscript>
        <p className="notice">
          JavaScript is off. The complete catalog and every installation guide
          remain available below; interactive search and filters require
          JavaScript.
        </p>
      </noscript>
      <table className="catalog-table">
        <caption className="sr-only">
          Skills, frameworks, and tools. Check individual licenses before use.
        </caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Type / access</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {visible.map((entry) => (
            <tr key={entry.id} id={`entry-${entry.id}`}>
              <th scope="row">
                <Link href={`/skills/${entry.id}`}>{entry.name}</Link>
              </th>
              <td className="entry-description">{entry.description}</td>
              <td className="entry-access">
                <span>
                  {entry.kind}
                  <span aria-hidden="true"> · </span>
                  {entry.access}
                </span>
                <span className="license-note">{entry.license}</span>
              </td>
              <td className="entry-actions">
                <a
                  href={sourceUrl(entry)}
                  aria-label={`View ${entry.name} source`}
                >
                  View source <Arrow />
                </a>
                <Link
                  href={`/skills/${entry.id}`}
                  aria-label={`${entry.name} install guide`}
                >
                  Install guide <Arrow />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!visible.length && (
        <div className="empty-state">
          <h3>No matching entries.</h3>
          <p>
            Try a broader term, choose another outcome, or return to the
            complete catalog.
          </p>
          <button type="button" className="button" onClick={clear}>
            Show all entries <Arrow />
          </button>
        </div>
      )}
    </>
  );
}
