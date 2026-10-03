import type { Metadata } from "next";
import Link from "next/link";
import { skillGroups } from "@/lib/portfolio-data";
import { RouteIntro, SiteFooter, SiteHeader } from "@/app/site-chrome";

export const metadata: Metadata = {
  title: "Stack & Tools | Vikash Yadav",
  description: "Full-stack development technologies and computer science foundations Vikash Yadav is developing.",
};

export default function StackPage() {
  return (
    <>
      <SiteHeader active="stack" />
      <main>
        <RouteIntro
          number="02"
          kicker="Tools & topics / 02"
          title={<>A stack with<br /><em>strong roots.</em></>}
          summary="A practical mix of web fundamentals, full-stack technologies, and computer science topics. I’m growing these skills through focused learning and hands-on work."
        />
        <section className="shell skills-board">
          <div className="skills-board-head"><span>Capability map</span><span>06 categories</span></div>
          {skillGroups.map((group) => (
            <article className="skill-row" key={group.number}>
              <span className="skill-number">{group.number}</span>
              <div className="skill-heading"><h2>{group.name}</h2><p>{group.description}</p></div>
              <div className="skill-cloud">
                {group.skills.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}
              </div>
              <span className="skill-corner" aria-hidden="true">↗</span>
            </article>
          ))}
        </section>
        <section className="shell stack-note">
          <span className="note-mark">+</span>
          <p>Focused on fundamentals first: clear interfaces, reliable APIs, and data models that make sense.</p>
          <Link href="/work">See how I’m applying them <b aria-hidden="true">↗</b></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}