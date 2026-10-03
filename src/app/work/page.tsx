import type { Metadata } from "next";
import Link from "next/link";
import { RouteIntro, SiteFooter, SiteHeader } from "@/app/site-chrome";
import { portfolioProjects } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Selected Work | Vikash Yadav",
  description: "Academic web development experience and project overviews for student management, restaurant ordering, and recruitment platforms.",
};

const [academicProject, educationProject, restaurantProject, recruitmentProject] = portfolioProjects;

export default function WorkPage() {
  return (
    <>
      <SiteHeader active="work" />
      <main>
        <RouteIntro
          number="01"
          kicker="Selected work / 01"
          title={<>Learning<br /><em>by building.</em></>}
          summary="A responsive academic website and three full-stack platform projects spanning education, restaurant operations, and recruitment."
        />
        <section className="shell case-list">
          <article className="case-study completed-case" id="academic">
            <div className="case-copy">
              <div className="case-meta"><span>01 / {academicProject.name}</span><span className="status-dot"><i /> {academicProject.status}</span></div>
              <h2>{academicProject.name}</h2>
              <p>{academicProject.solution}</p>
              <ul className="case-points">
                {academicProject.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <div className="tags">{academicProject.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
            </div>
            <div className="case-art academic-art" aria-label="Abstract illustration of a responsive website layout">
              <div className="browser-bar"><i /><i /><i /><span>academic-site / home</span></div>
              <div className="browser-content">
                <div className="mock-nav"><b>STUDIO</b><i /><i /><i /></div>
                <div className="mock-hero"><span>01 — WELCOME</span><b>Ideas<br />into form.</b><i /></div>
                <div className="mock-columns"><i /><i /><i /></div>
              </div>
              <span className="art-label">01 / RESPONSIVE LAYOUT</span>
            </div>
          </article>

          <article className="case-study student-case" id="edumanage">
            <div className="case-copy">
              <div className="case-meta"><span>02 / {educationProject.name}</span><span className="status-dot is-overview"><i /> {educationProject.status}</span></div>
              <h2>{educationProject.category}</h2>
              <div className="case-challenge"><span>CHALLENGE</span><p>{educationProject.challenge}</p></div>
              <p>{educationProject.solution}</p>
              <ul className="case-points">
                {educationProject.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <div className="tags">{educationProject.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
            </div>
            <div className="case-art student-art" aria-label="Illustrated education management dashboard">
              <div className="edu-window">
                <div className="edu-sidebar"><b>EM<span>.</span></b><i className="selected"/><i/><i/><i/><span>ADMIN</span></div>
                <div className="edu-main">
                  <div className="edu-topline"><span>OVERVIEW</span><b>MON, 14 OCT</b></div>
                  <div className="edu-greeting">Good morning, Admin <span>✳</span></div>
                  <div className="edu-stats"><div><span>STUDENTS</span><b>—</b><i>RECORDS</i></div><div><span>ATTENDANCE</span><b>—</b><i>TRACKING</i></div><div><span>STAFF</span><b>—</b><i>DIRECTORY</i></div></div>
                  <div className="edu-bottom"><div className="edu-chart"><span>ATTENDANCE / WEEK</span><i/><i/><i/><i/><i/><i/><i/></div><div className="edu-list"><span>UP NEXT</span><i/><i/><i/></div></div>
                </div>
              </div>
              <span className="art-label">EDUMANAGE / DASHBOARD STUDY</span>
            </div>
          </article>

          <article className="case-study restaurant-case" id="dinedesk">
            <div className="case-copy">
              <div className="case-meta"><span>03 / {restaurantProject.name}</span><span className="status-dot is-overview"><i /> {restaurantProject.status}</span></div>
              <h2>{restaurantProject.category}</h2>
              <div className="case-challenge"><span>CHALLENGE</span><p>{restaurantProject.challenge}</p></div>
              <p>{restaurantProject.solution}</p>
              <ul className="case-points">
                {restaurantProject.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <div className="tags">{restaurantProject.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
            </div>
            <div className="case-art restaurant-art" aria-label="Illustrated digital menu and restaurant order screen">
              <div className="menu-ticket">
                <div className="menu-top"><b>DineDesk<span>.</span></b><span>TABLE 08 · MENU</span></div>
                <div className="menu-headline">Made fresh.<br/><em>Made for you.</em></div>
                <div className="menu-item"><i className="dish dish-one"/><span><b>Garden bowl</b><small>Greens · citrus · herbs</small></span><strong>—</strong></div>
                <div className="menu-item"><i className="dish dish-two"/><span><b>House pasta</b><small>Tomato · basil · parmesan</small></span><strong>—</strong></div>
                <div className="menu-order"><span>2 ITEMS</span><b>VIEW ORDER <i>↗</i></b></div>
              </div>
              <div className="kitchen-note"><span>NEW ORDER</span><b>#1048</b><i>IN PREP</i></div>
              <span className="art-label">DINEDESK / DIGITAL MENU</span>
            </div>
          </article>

          <article className="case-study career-case" id="careerhub">
            <div className="case-copy">
              <div className="case-meta"><span>04 / {recruitmentProject.name}</span><span className="status-dot is-overview"><i /> {recruitmentProject.status}</span></div>
              <h2>{recruitmentProject.category}</h2>
              <div className="case-challenge"><span>CHALLENGE</span><p>{recruitmentProject.challenge}</p></div>
              <p>{recruitmentProject.solution}</p>
              <ul className="case-points">
                {recruitmentProject.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <div className="tags">{recruitmentProject.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
            </div>
            <div className="case-art career-art" aria-label="Illustrated recruitment candidate pipeline">
              <div className="career-board">
                <div className="career-board-head"><span>ROLE PIPELINE</span><b>CANDIDATE OVERVIEW <i>⌄</i></b></div>
                <div className="pipeline-columns">
                  <div><span>APPLIED</span><i/><i/><i/></div>
                  <div><span>REVIEW</span><i/><i/></div>
                  <div><span>INTERVIEW</span><i/><i/></div>
                </div>
                <div className="career-candidate"><span>CV</span><b>Candidate profile</b><i>Resume attached</i><strong>↗</strong></div>
              </div>
              <span className="art-label">CAREERHUB / CANDIDATE PIPELINE</span>
            </div>
          </article>
        </section>
        <section className="shell route-next">
          <span>Next up</span>
          <Link href="/stack">The tools behind the work <b aria-hidden="true">↗</b></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}