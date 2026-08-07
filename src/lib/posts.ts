import { promises as fs } from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { Post, PostFrontmatter, PostWithContent } from "../types";

const POSTS_DIRECTORY = path.join(process.cwd(), "src", "content", "posts");
const WORDS_PER_MINUTE = 220;

function normalizeSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getCanonicalSlug(canonicalUrl: string): string | null {
  if (!canonicalUrl) {
    return null;
  }

  try {
    const pathname = new URL(canonicalUrl).pathname;
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length >= 2 && segments[0] === "blog") {
      return segments.at(-1) ?? null;
    }

    return null;
  } catch {
    return null;
  }
}

function getBaseSlug(fileName: string): string {
  return fileName.replace(/\.mdx?$/, "");
}

function getPublicSlug(fileName: string, canonicalUrl: string): string {
  const canonicalSlug = getCanonicalSlug(canonicalUrl);
  if (canonicalSlug) {
    return canonicalSlug;
  }

  return normalizeSlug(getBaseSlug(fileName));
}

function estimateReadingMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function toFrontmatter(data: Record<string, unknown>): PostFrontmatter {
  return {
    title: String(data.title ?? "Untitled"),
    publishedAt: String(data.publishedAt ?? new Date().toISOString()),
    summary: String(data.summary ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    canonicalUrl: String(data.canonicalUrl ?? ""),
    featured: data.featured === true,
  };
}

async function readPostFiles(): Promise<string[]> {
  try {
    const entries = await fs.readdir(POSTS_DIRECTORY);
    return entries.filter(
      (entry) => entry.endsWith(".mdx") || entry.endsWith(".md"),
    );
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<PostWithContent | null> {
  const files = await readPostFiles();
  for (const fileName of files) {
    const raw = await fs.readFile(path.join(POSTS_DIRECTORY, fileName), "utf8");
    const { data, content } = matter(raw);
    const frontmatter = toFrontmatter(data);
    const publicSlug = getPublicSlug(fileName, frontmatter.canonicalUrl);
    const legacySlug = getBaseSlug(fileName);

    if (slug !== publicSlug && slug !== legacySlug) {
      continue;
    }

    return {
      ...frontmatter,
      slug: publicSlug,
      readingMinutes: estimateReadingMinutes(content),
      content,
    };
  }

  return null;
}

export async function getPosts(): Promise<Post[]> {
  const files = await readPostFiles();

  const posts = await Promise.all(
    files.map(async (fileName) => {
      const raw = await fs.readFile(
        path.join(POSTS_DIRECTORY, fileName),
        "utf8",
      );
      const { data, content } = matter(raw);

      return {
        ...toFrontmatter(data),
        slug: getPublicSlug(fileName, String(data.canonicalUrl ?? "")),
        readingMinutes: estimateReadingMinutes(content),
      } satisfies Post;
    }),
  );

  return posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export async function getFeaturedPosts(limit = 2): Promise<Post[]> {
  const posts = await getPosts();
  const featured = posts.filter((post) => post.featured);
  return (featured.length > 0 ? featured : posts).slice(0, limit);
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getPosts();
  return Array.from(new Set(posts.flatMap((post) => post.tags))).sort();
}
