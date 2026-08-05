import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "../../lib/cn";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonLinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-cobalt text-white shadow-glow hover:bg-cobalt-soft",
  outline:
    "border border-hairline bg-white/5 text-ink hover:border-cobalt/60 hover:bg-white/10",
  ghost: "text-muted hover:text-ink",
};

export function ButtonLink({
  href,
  variant = "primary",
  external = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
