import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ShareLinks } from "../../../components/blog/share-links";
import { profile } from "../../../data/profile";
import { siteConfig } from "../../../data/site";
import { formatPostDate } from "../../../lib/date";
import { getPost, getPosts } from "../../../lib/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: post.canonicalUrl || url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.summary,
      publishedTime: post.publishedAt,
      authors: [profile.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    keywords: post.tags.join(", "),
    mainEntityOfPage: post.canonicalUrl || url,
    author: {
      "@type": "Person",
      name: profile.name,
      url: siteConfig.url,
    },
  };

  return (
    <article className="py-16">
      <div className="shell max-w-3xl">
        <Link
          href="/blog"
          className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
        >
          Back to all articles
        </Link>

        <header className="mt-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-cobalt-soft">
            {formatPostDate(post.publishedAt)} : {post.readingMinutes} min read
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {post.summary}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        </header>

        <div className="prose prose-invert mt-10 max-w-none prose-headings:font-heading prose-pre:border prose-pre:border-hairline prose-pre:bg-surface">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-12">
          <ShareLinks url={url} title={post.title} />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </article>
  );
}
