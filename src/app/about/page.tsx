import type { Metadata } from "next";
import Link from "next/link";
import { RouteIntro, SiteFooter, SiteHeader } from "@/app/site-chrome";

export const metadata: Metadata = {
  title: "About | Vikash Yadav",
  description: "Meet Vikash Gajraj Yadav, a computer science graduate based in Maharashtra, India.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="about" />
      <main>
        <RouteIntro
          number="03"
          kicker="A little context / 03"
          title={<>Curious by nature.<br /><em>Building by practice.</em></>}
          summary="I’m Vikash, a B.Sc. Computer Science graduate from Titwala West, Maharashtra, building a path into full-stack software development."
        />
        <section className="shell about-story">
          <div className="story-aside">
            <div className="portrait-composition" aria-label="Abstract VY monogram artwork">
              <span className="portrait-ring ring-one" /><span className="portrait-ring ring-two" />
              <span className="portrait-monogram">VY<span>.</span></span>
              <span className="portrait-coordinate">TITWALA<br />MAHARASHTRA</span>
            </div>
            <span className="story-caption">TITWALA · MAHARASHTRA · INDIA</span>
          </div>
          <div className="story-copy">
            <p className="story-lead">I like understanding how a product works all the way through: from the first screen to the data behind it.</p>
            <p>My computer science studies gave me a starting point in web development. An academic website project introduced me to HTML, CSS, JavaScript, responsive layouts, and basic input validation.</p>
            <p>Now I’m extending that foundation toward modern full-stack development, learning how frontend experiences connect to APIs and relational databases. I value clear problem-solving, careful details, and steady progress.</p>
            <div className="about-facts">
              <div><span>Education</span><strong>B.Sc. Computer Science</strong></div>
              <div><span>Based in</span><strong>Titwala West, Kalyan, Thane</strong></div>
              <div><span>Looking for</span><strong>Junior software / full-stack roles</strong></div>
            </div>
            <Link className="button" href="/resume.html">Read my resume <span className="arrow" aria-hidden="true">↗</span></Link>
          </div>
        </section>
        <section className="shell about-endnote"><span>Still learning.</span><span>Always building toward better.</span></section>
      </main>
      <SiteFooter />
    </>
  );
}