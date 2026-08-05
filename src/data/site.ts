import type { NavItem } from "../types";

export const siteConfig = {
  url: "https://ravinvasudev.com",
  blogUrl: "https://blog.ravinvasudev.com",
  name: "Ravin Vasudev",
  shortName: "ravinvasudev.com",
  description:
    "Cloud and platform architecture portfolio of Ravin Vasudev: enterprise cloud governance, Kubernetes platform engineering, distributed systems and CCoE leadership.",
} as const;

export const primaryNav: NavItem[] = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/blog", label: "Blog" },
];
