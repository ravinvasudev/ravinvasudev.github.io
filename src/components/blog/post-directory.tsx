"use client";

import { Minus, Plus, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { cn } from "../../lib/cn";
import { formatPostDate } from "../../lib/date";
import type { Post } from "../../types";

interface PostDirectoryProps {
  posts: Post[];
  tags: string[];
}

const ALL_TAGS = "All topics";
const POSTS_PER_PAGE = 10;
const COLLAPSED_TAG_LIMIT = 12;

export function PostDirectory({ posts, tags }: PostDirectoryProps) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(ALL_TAGS);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllTags, setShowAllTags] = useState(false);

  const allTagOptions = useMemo(() => [ALL_TAGS, ...tags], [tags]);

  const collapsedTags = useMemo(
    () => allTagOptions.slice(0, COLLAPSED_TAG_LIMIT),
    [allTagOptions],
  );

  const hasHiddenTags = allTagOptions.length > collapsedTags.length;

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

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));

  useEffect(() => {
    setCurrentPage(1);
  }, [query, activeTag]);

  useEffect(() => {
    if (collapsedTags.includes(activeTag)) {
      return;
    }

    setShowAllTags(true);
  }, [activeTag, collapsedTags]);

  const visibleTagOptions = showAllTags ? allTagOptions : collapsedTags;

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filtered.slice(start, start + POSTS_PER_PAGE);
  }, [filtered, currentPage]);

  const visibleFrom =
    filtered.length === 0 ? 0 : (currentPage - 1) * POSTS_PER_PAGE + 1;
  const visibleTo = Math.min(currentPage * POSTS_PER_PAGE, filtered.length);
  const pageWindowStart = Math.max(1, currentPage - 2);
  const pageWindowEnd = Math.min(totalPages, pageWindowStart + 4);
  const pageNumbers = Array.from(
    { length: pageWindowEnd - pageWindowStart + 1 },
    (_, index) => pageWindowStart + index,
  );

  return (
    <div>
      <div className="flex flex-col gap-4">
        <label className="relative w-full">
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

        <div>
          <div
            id="all-topic-tags"
            className="rounded-2xl border border-hairline bg-white/5 p-3"
          >
            <div className="flex flex-wrap items-center gap-2">
              {visibleTagOptions.map((tag) => (
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

              {hasHiddenTags ? (
                <button
                  type="button"
                  aria-expanded={showAllTags}
                  aria-controls="all-topic-tags"
                  onClick={() => setShowAllTags((open) => !open)}
                  className="flex items-center gap-1 rounded-full border border-cobalt bg-cobalt/15 px-2.5 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-cobalt hover:bg-cobalt/25"
                >
                  {showAllTags ? (
                    <>
                      <Minus size={12} />
                    </>
                  ) : (
                    <>
                      <Plus size={12} />
                      {allTagOptions.length - collapsedTags.length}
                    </>
                  )}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-muted">
          No articles match that filter yet.
        </p>
      ) : (
        <div className="mt-10">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
            Showing {visibleFrom}-{visibleTo} of {filtered.length} articles
          </p>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {paginatedPosts.map((post) => (
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

          {totalPages > 1 ? (
            <nav
              aria-label="Article pagination"
              className="mt-8 flex flex-wrap items-center gap-2"
            >
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="rounded-full border border-hairline px-3 py-1.5 text-xs font-semibold text-muted transition-colors enabled:hover:border-cobalt/40 enabled:hover:text-ink disabled:cursor-not-allowed disabled:opacity-50"
              >
                Previous
              </button>

              {pageNumbers.map((page) => (
                <button
                  key={page}
                  type="button"
                  aria-current={page === currentPage ? "page" : undefined}
                  onClick={() => setCurrentPage(page)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                    page === currentPage
                      ? "border-cobalt bg-cobalt/15 text-ink"
                      : "border-hairline text-muted hover:border-cobalt/40 hover:text-ink",
                  )}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((page) => Math.min(totalPages, page + 1))
                }
                disabled={currentPage === totalPages}
                className="rounded-full border border-hairline px-3 py-1.5 text-xs font-semibold text-muted transition-colors enabled:hover:border-cobalt/40 enabled:hover:text-ink disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
              </button>
            </nav>
          ) : null}
        </div>
      )}
    </div>
  );
}
