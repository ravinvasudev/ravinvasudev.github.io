export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>
          Copyright {new Date().getFullYear()} Ravin Vasudev. All rights
          reserved.
        </span>
        <a href="mailto:ravinvasudev@gmail.com">ravinvasudev@gmail.com</a>
      </div>
    </footer>
  );
}
