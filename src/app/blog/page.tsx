import type { Metadata } from "next";

import { PostDirectory } from "../../components/blog/post-directory";
import { profile } from "../../data/profile";
import { siteConfig } from "../../data/site";
import { getAllTags, getPosts } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Technical Articles",
  description:
    "Architecture deep-dives on cloud governance, platform engineering, Kubernetes delivery and distributed systems by Ravin Vasudev.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/blog`,
    title: `Technical Articles | ${profile.name}`,
    description:
      "Architecture deep-dives on cloud governance, platform engineering, Kubernetes delivery and distributed systems by Ravin Vasudev.",
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `Technical Articles | ${profile.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Technical Articles | ${profile.name}`,
    description:
      "Architecture deep-dives on cloud governance, platform engineering, Kubernetes delivery and distributed systems by Ravin Vasudev.",
    images: [`${siteConfig.url}/opengraph-image`],
  },
};

export default async function BlogPage() {
  const [posts, tags] = await Promise.all([getPosts(), getAllTags()]);

  return (
    <section className="py-24">
      <div className="shell">
        <p className="kicker">Engineering Notes</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Technical articles and architecture deep-dives
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Practical write-ups on cloud governance operating models, platform
          delivery patterns and the tradeoffs behind large-scale system
          decisions.
        </p>

        <div className="mt-12">
          <PostDirectory posts={posts} tags={tags} />
        </div>
      </div>
    </section>
  );
}
