"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { primaryNav } from "../../data/site";
import { cn } from "../../lib/cn";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/80 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-heading text-sm font-bold uppercase tracking-[0.24em] text-ink"
        >
          Ravin Vasudev
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-full border border-hairline p-2 text-muted md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={cn(
          "overflow-hidden border-t border-hairline bg-surface/95 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="shell flex flex-col py-3">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-sm text-muted transition-colors hover:bg-white/5 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
