"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { cn } from "../../lib/cn";
import { formatPostDate } from "../../lib/date";
import type { Post } from "../../types";

interface PostDirectoryProps {
  posts: Post[];
  tags: string[];
}

const ALL_TAGS = "All topics";

export function PostDirectory({ posts, tags }: PostDirectoryProps) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(ALL_TAGS);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesTag =
        activeTag === ALL_TAGS || post.tags.includes(activeTag);
      const matchesQuery =
        needle.length === 0 ||
        post.title.toLowerCase().includes(needle) ||
        post.summary.toLowerCase().includes(needle);

      return matchesTag && matchesQuery;
    });
  }, [posts, query, activeTag]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <label className="relative w-full md:max-w-xs">
          <span className="sr-only">Search articles</span>
          <Search
            size={15}
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles"
            className="w-full rounded-full border border-hairline bg-white/5 py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-muted"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {[ALL_TAGS, ...tags].map((tag) => (
            <button
              key={tag}
              type="button"
              aria-pressed={activeTag === tag}
              onClick={() => setActiveTag(tag)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                activeTag === tag
                  ? "border-cobalt bg-cobalt/15 text-ink"
                  : "border-hairline text-muted hover:border-cobalt/40 hover:text-ink",
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-muted">
          No articles match that filter yet.
        </p>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {filtered.map((post) => (
            <article key={post.slug} className="surface-card p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {formatPostDate(post.publishedAt)} : {post.readingMinutes} min
                read
              </p>
              <h2 className="mt-3 text-lg font-bold leading-snug">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-cobalt-soft"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {post.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
