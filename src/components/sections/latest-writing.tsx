import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { formatPostDate } from "../../lib/date";
import type { Post } from "../../types";
import { ButtonLink } from "../ui/button-link";
import { SectionHeading } from "../ui/section-heading";

interface LatestWritingProps {
  posts: Post[];
}

export function LatestWriting({ posts }: LatestWritingProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="writing" className="border-b border-hairline py-24">
      <div className="shell">
        <SectionHeading
          kicker="Thought Leadership"
          title="Technical articles and architecture notes"
          description="Long-form breakdowns of governance models, platform patterns and the tradeoffs behind them."
          action={
            <ButtonLink href="/blog" variant="outline">
              All articles
              <ArrowRight size={15} />
            </ButtonLink>
          }
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="surface-card p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {formatPostDate(post.publishedAt)} : {post.readingMinutes} min
                read
              </p>
              <h3 className="mt-3 text-lg font-bold leading-snug">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-cobalt-soft"
                >
                  {post.title}
                </Link>
              </h3>
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
      </div>
    </section>
  );
}
