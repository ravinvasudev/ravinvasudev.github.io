import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "../components/layout/site-footer";
import { SiteHeader } from "../components/layout/site-header";

import "./globals.css";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ravin Vasudev | Principal Cloud and Platform Architect",
  description:
    "Portfolio of Ravin Vasudev covering cloud architecture, platform engineering, distributed systems, and technical leadership.",
  openGraph: {
    title: "Ravin Vasudev | Principal Cloud and Platform Architect",
    description:
      "Cloud and platform architecture leadership portfolio with projects, experience, and achievements.",
    url: "https://ravinvasudev.com",
    siteName: "ravinvasudev.com",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${jetbrains.variable}`}
    >
      <body>
        <SiteHeader />
        <main className="shell">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
