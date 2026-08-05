import { Github, Linkedin, Mail, Rss } from "lucide-react";
import Link from "next/link";

import { profile } from "../../data/profile";
import { primaryNav } from "../../data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-surface/40">
      <div className="shell flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em]">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {profile.title} : {profile.location}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.socials.email}`}
            aria-label="Email Ravin Vasudev"
            className="rounded-full border border-hairline p-2 text-muted transition-colors hover:border-cobalt/60 hover:text-ink"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-full border border-hairline p-2 text-muted transition-colors hover:border-cobalt/60 hover:text-ink"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-full border border-hairline p-2 text-muted transition-colors hover:border-cobalt/60 hover:text-ink"
          >
            <Github size={16} />
          </a>
          <a
            href="/feed.xml"
            aria-label="RSS feed"
            className="rounded-full border border-hairline p-2 text-muted transition-colors hover:border-cobalt/60 hover:text-ink"
          >
            <Rss size={16} />
          </a>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="shell py-4 text-xs text-muted">
          Copyright {new Date().getFullYear()} {profile.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
