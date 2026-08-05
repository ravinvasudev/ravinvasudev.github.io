import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="shell max-w-xl">
        <p className="kicker">404</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          That page has been decommissioned
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          The route you requested does not exist. Head back to the portfolio or
          browse the technical articles.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-cobalt px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cobalt-soft"
          >
            Back to portfolio
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-hairline px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-cobalt/60"
          >
            Read articles
          </Link>
        </div>
      </div>
    </section>
  );
}
