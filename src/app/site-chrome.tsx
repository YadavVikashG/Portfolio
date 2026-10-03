import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  { href: "/work", anchor: "#projects", label: "Projects", key: "work" },
  { href: "/stack", anchor: "#experience", label: "Experience", key: "stack" },
  { href: "/about", anchor: "#about", label: "About", key: "about" },
];

export function SiteHeader({ active = "home", singlePage = false }: { active?: string; singlePage?: boolean }) {
  return (
    <header className="shell topbar">
      <Link className="monogram" href="/" aria-label="Vikash Yadav home">
        VY<span>.</span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link
            aria-current={active === item.key ? "page" : undefined}
            className={active === item.key ? "nav-link is-active" : "nav-link"}
            href={singlePage ? item.anchor : item.href}
            key={item.key}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta transition-colors duration-200 motion-reduce:transition-none" href={singlePage ? "#contact" : "/contact"}>
        Get in touch <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="shell site-footer">
      <span>© 2026 Vikash Gajraj Yadav</span>
      <a href="mailto:yadavvikashgajraj@gmail.com">Say hello ↗</a>
    </footer>
  );
}

export function RouteIntro({
  number,
  kicker,
  title,
  summary,
}: {
  number: string;
  kicker: string;
  title: ReactNode;
  summary: string;
}) {
  return (
    <section className="shell route-intro">
      <div className="route-intro-copy">
        <p className="section-kicker">{kicker}</p>
        <h1 className="route-title">{title}</h1>
        <p className="route-summary">{summary}</p>
      </div>
      <div className="route-stamp" aria-hidden="true">
        <span>{number}</span>
        <i />
      </div>
    </section>
  );
}