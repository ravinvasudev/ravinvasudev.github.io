import { Linkedin, Share2 } from "lucide-react";

interface ShareLinksProps {
  url: string;
  title: string;
}

export function ShareLinks({ url, title }: ShareLinksProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex flex-wrap items-center gap-3 border-t border-hairline pt-6">
      <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        <Share2 size={14} aria-hidden="true" />
        Share
      </span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-xs font-semibold text-muted transition-colors hover:border-cobalt/60 hover:text-ink"
      >
        <Linkedin size={14} aria-hidden="true" />
        LinkedIn
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-xs font-semibold text-muted transition-colors hover:border-cobalt/60 hover:text-ink"
      >
        Twitter / X
      </a>
    </div>
  );
}
