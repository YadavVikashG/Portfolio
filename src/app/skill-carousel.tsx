"use client";

import { useEffect, useState } from "react";

const skills = ["Next.js", "Node.js", "PostgreSQL", "Prisma", "React"];

export default function SkillCarousel() {
  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return;

    const interval = window.setInterval(() => {
      setActiveSkill((current) => (current + 1) % skills.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="skill-rotator" aria-label={`Current focus areas: ${skills.join(", ")}`}>
      <span className="skill-rotator-label" aria-hidden="true">CURRENTLY EXPLORING</span>
      <span className="skill-rotator-value" aria-hidden="true" key={skills[activeSkill]}>
        {skills[activeSkill]}
      </span>
      <span className="visually-hidden">Current focus areas: {skills.join(", ")}.</span>
    </span>
  );
}