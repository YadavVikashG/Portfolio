import type { Metadata } from "next";
import ContactForm from "@/app/contact-form";
import { RouteIntro, SiteFooter, SiteHeader } from "@/app/site-chrome";

export const metadata: Metadata = {
  title: "Contact | Vikash Yadav",
  description: "Contact Vikash Yadav about junior software and full-stack developer opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader active="contact" />
      <main>
        <RouteIntro
          number="04"
          kicker="Open to opportunities / 04"
          title={<>Have something<br /><em>in mind?</em></>}
          summary="I’m open to junior software and full-stack developer opportunities. Share a little about the role or project and I’ll get back to you."
        />
        <section className="shell contact-layout">
          <div className="contact-aside">
            <div className="contact-aside-top"><span>DIRECT LINE</span><span className="live-mark"><i /> OPEN TO WORK</span></div>
            <a href="mailto:yadavvikashgajraj@gmail.com">yadavvikashgajraj@gmail.com <b aria-hidden="true">↗</b></a>
            <a href="tel:+919140878781">+91 91408 78781 <b aria-hidden="true">↗</b></a>
            <p>Titwala West<br />Kalyan, Thane, Maharashtra</p>
            <div className="contact-scribble" aria-hidden="true">Let’s make<br /><em>something useful.</em></div>
          </div>
          <div className="contact-panel">
            <div className="contact-panel-heading"><span>01 — MESSAGE</span><span>Usually replies by email</span></div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}