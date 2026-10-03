import Link from "next/link";
import { SiteHeader } from "@/app/site-chrome";
import MagneticLink from "@/app/magnetic-link";
import PortfolioTerminal from "@/app/portfolio-terminal";
import ProjectShowcase from "@/app/project-showcase";
import SkillCarousel from "@/app/skill-carousel";
import { skillGroups } from "@/lib/portfolio-data";

function ArrowIcon({ direction = "up-right" }: { direction?: "up-right" | "down" }) {
  const path = direction === "down" ? "M12 4v16m7-7-7 7-7-7" : "M7 17 17 7M7 7h10v10";

  return (
    <svg className="cta-arrow-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={path} />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="portfolio-home">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader singlePage />
      <main id="main-content">
        <section className="shell portfolio-hero" id="top">
          <div className="hero-copy">
            <p className="hero-overline"><span className="online-indicator" /> VIKASH GAJRAJ YADAV <i /> SOFTWARE ENGINEERING</p>
            <h1>Thoughtful software,<br /><em>from screen to system.</em></h1>
            <p className="hero-summary">Aspiring full-stack developer building a foundation across frontend, backend, and data.</p>
            <p className="hero-skill-line"><SkillCarousel /></p>
            <p className="hero-location"><span aria-hidden="true">⌖</span> Titwala, Maharashtra <i /> IST · UTC+05:30</p>
            <p className="availability-badge"><span /> OPEN TO JUNIOR SOFTWARE ROLES</p>
            <div className="hero-actions">
              <MagneticLink className="button magnetic-primary" href="#projects">View projects <ArrowIcon direction="down" /></MagneticLink>
              <MagneticLink className="hero-chat-link" href="mailto:yadavvikashgajraj@gmail.com">Let’s chat <ArrowIcon /></MagneticLink>
            </div>
          </div>
          <div className="hero-scene" aria-label="Abstract three-dimensional illustration of a digital interface">
            <div className="scene-disc disc-back" /><div className="scene-disc disc-front" />
            <div className="scene-panel">
              <div className="scene-panel-top"><span>VY / DIGITAL SYSTEMS</span><b>01—04</b></div>
              <div className="scene-code"><span>const</span> ideas = <em>build</em>();</div>
              <div className="scene-lines"><i /><i /><i /></div>
              <div className="scene-panel-foot"><span>DESIGN WITH INTENT</span><b>↗</b></div>
            </div>
            <span className="scene-label label-left">FULL-STACK<br />DEVELOPMENT</span>
            <span className="scene-label label-right">LEARN<br />BY MAKING</span>
            <span className="scene-coordinate">19° N / 73° E</span>
          </div>
          <span className="hero-index">01 — INTRODUCTION</span>
        </section>

        <section className="portfolio-ribbon" aria-label="Current technology focus">
          <span className="ribbon-heading">CURRENT FOCUS</span>
          <div className="ribbon-viewport" aria-hidden="true">
            <div className="ribbon-track">
              {[0, 1].map((set) => (
                <span className="ribbon-set" key={set}>
                  <span>PRODUCT THINKING</span><i />
                  <span>NEXT.JS</span><i />
                  <span>NODE.JS</span><i />
                  <span>POSTGRESQL</span><i />
                  <span>PRISMA</span><i />
                  <span>BUILD · LEARN · ITERATE</span><i />
                </span>
              ))}
            </div>
          </div>
          <span className="ribbon-mark" aria-hidden="true">✳</span>
        </section>

        <section className="portfolio-section projects-section" id="projects">
          <div className="portfolio-shell">
            <div className="portfolio-section-heading">
              <div><p className="portfolio-kicker">01 / FEATURED PROJECTS</p><h2>Four problems.<br /><em>Different worlds.</em></h2></div>
              <Link className="quiet-link" href="/work">View case studies <span aria-hidden="true">↗</span></Link>
            </div>
            <ProjectShowcase />
          </div>
        </section>

        <section className="portfolio-section experience-section" id="experience">
          <div className="portfolio-shell experience-layout">
            <div className="experience-intro">
              <p className="portfolio-kicker">02 / EXPERIENCE &amp; IMPACT</p>
              <h2>Grounded in<br /><em>the fundamentals.</em></h2>
              <p>A learning path built on computer science, an academic web project, and focused full-stack study.</p>
              <div className="impact-stats"><div><b>01</b><span>academic build</span></div><div><b>03</b><span>product case studies</span></div></div>
            </div>
            <div className="experience-side">
              <div className="experience-timeline">
                <article className="timeline-item"><span className="timeline-index">01</span><div><span className="timeline-label">EDUCATION</span><h3>B.Sc. Computer Science</h3><p>Academic foundation in computing, problem solving, and software concepts.</p></div></article>
                <article className="timeline-item"><span className="timeline-index">02</span><div><span className="timeline-label">FIRST BUILD</span><h3>Responsive academic website</h3><p>HTML, CSS, JavaScript, responsive layouts, and basic validation.</p></div></article>
                <article className="timeline-item"><span className="timeline-index">03</span><div><span className="timeline-label">CURRENT FOCUS</span><h3>Full-stack product systems</h3><p>Exploring education, restaurant, and recruitment workflows with modern web technologies.</p></div></article>
              </div>
              <div className="skills-bento" aria-label="Technology categories">
                <div className="skills-bento-heading"><span>TECHNOLOGY MAP</span><span>FOCUS AREAS</span></div>
                <div className="skills-bento-grid">
                  {skillGroups.map((group) => (
                    <article className="skill-bento-card" key={group.number}>
                      <span>{group.number} / {group.name}</span>
                      <p>{group.skills.join(" · ")}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-section about-section" id="about">
          <div className="portfolio-shell about-layout">
            <div className="about-art" aria-hidden="true"><span>VY</span><i /><b>CURIOUS<br />BY NATURE</b></div>
            <div className="about-content"><p className="portfolio-kicker">03 / A LITTLE ABOUT ME</p><h2>Curiosity is a<br /><em>useful tool.</em></h2>
              <p className="about-bio">I’m Vikash, a B.Sc. Computer Science graduate from Titwala, Maharashtra. I enjoy understanding how a product works from its first screen to the data behind it. My academic website project gave me a start with web fundamentals; I’m now building toward full-stack development with care for clarity, detail, and steady learning.</p>
              <Link className="quiet-link" href="/about">More about me <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="portfolio-section principles-section">
          <div className="portfolio-shell">
            <div className="portfolio-section-heading principles-heading"><div><p className="portfolio-kicker">04 / HOW I WORK</p><h2>Good foundations.<br /><em>Human details.</em></h2></div><p>Not borrowed quotes. Just the principles I bring to the work.</p></div>
            <div className="principle-grid"><article><span>01</span><h3>Think clearly</h3><p>Break a problem down and look for a useful, understandable solution.</p></article><article><span>02</span><h3>Notice details</h3><p>Care about the small decisions that make interfaces easier to use.</p></article><article><span>03</span><h3>Keep learning</h3><p>Stay adaptable, ask questions, and build understanding through practice.</p></article></div>
          </div>
        </section>

        <section className="portfolio-section contact-section" id="contact">
          <div className="portfolio-shell contact-inner">
            <p className="portfolio-kicker">05 / LET’S CONNECT</p>
            <h2>Let’s build<br /><em>something useful.</em></h2>
            <p className="contact-location">Open to junior software and full-stack developer opportunities · Maharashtra, India</p>
            <div className="contact-actions"><MagneticLink className="button magnetic-primary" href="mailto:yadavvikashgajraj@gmail.com">Start a conversation <ArrowIcon /></MagneticLink><a className="resume-link" href="/resume.html" download="Vikash-Gajraj-Yadav-Resume.html">Download resume <ArrowIcon direction="down" /></a></div>
            <a className="contact-email" href="mailto:yadavvikashgajraj@gmail.com">yadavvikashgajraj@gmail.com</a>
            <PortfolioTerminal />
          </div>
        </section>
      </main>
      <footer className="portfolio-footer"><span>© 2026 Vikash Gajraj Yadav</span><span>TITWALA · IST (UTC+05:30)</span><div className="footer-links"><a href="https://github.com/yadavvikashg" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/vikash-yadav-211282355" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:yadavvikashgajraj@gmail.com">Email ↗</a></div></footer>
    </div>
  );
}