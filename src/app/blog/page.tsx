import type { Metadata } from "next";

import { PostDirectory } from "../../components/blog/post-directory";
import { getAllTags, getPosts } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Technical Articles",
  description:
    "Architecture deep-dives on cloud governance, platform engineering, Kubernetes delivery and distributed systems by Ravin Vasudev.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const [posts, tags] = await Promise.all([getPosts(), getAllTags()]);

  return (
    <section className="py-16">
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
