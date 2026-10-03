"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { portfolioProjects, type PortfolioProject } from "@/lib/portfolio-data";

function ProjectVisual({ kind }: { kind: string }) {
  return (
    <div className={`project-visual visual-${kind}`} aria-hidden="true">
      <div className="visual-chrome"><span /><span /><span /><b>{kind} / preview</b></div>
      {kind === "academic" && (
        <div className="academic-preview">
          <span>WELCOME / 01</span><b>Ideas into<br />form.</b><i /><div><i /><i /><i /></div>
        </div>
      )}
      {kind === "education" && (
        <div className="education-preview">
          <div className="preview-side"><b>EM<span>.</span></b><i /><i /><i /></div>
          <div className="preview-dashboard"><span>ADMIN / OVERVIEW</span><b>Good morning.</b><div className="preview-stats"><i /><i /><i /></div><div className="preview-chart"><i /><i /><i /><i /><i /><i /><i /></div></div>
        </div>
      )}
      {kind === "restaurant" && (
        <div className="restaurant-preview">
          <div className="preview-menu-heading"><span>DineDesk<span>.</span></span><b>THE MENU</b></div>
          <p>Fresh from<br /><em>the kitchen.</em></p>
          <div className="preview-dish"><i /><b>Garden bowl</b><span>—</span></div>
          <div className="preview-dish"><i /><b>House pasta</b><span>—</span></div>
          <div className="preview-order">VIEW ORDER <b>↗</b></div>
        </div>
      )}
      {kind === "career" && (
        <div className="career-preview">
          <div className="career-preview-head"><b>ROLE PIPELINE</b><span>CANDIDATE OVERVIEW</span></div>
          <div className="career-preview-cols"><div><span>APPLIED</span><i /><i /></div><div><span>REVIEW</span><i /><i /></div><div><span>INTERVIEW</span><i /></div></div>
          <div className="candidate-preview"><i>CV</i><b>Candidate profile</b><span>Resume attached</span></div>
        </div>
      )}
      <span className="visual-cross">✳</span>
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: PortfolioProject; onOpen: (project: PortfolioProject) => void }) {
  return (
    <article className={`portfolio-project project-${project.visual}`}>
      <div className="project-preview-wrap">
        <ProjectVisual kind={project.visual} />
        <div className="project-tech-glass" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </div>
      <div className="project-card-content">
        <div className="project-card-heading">
          <div><span className="project-category">{project.category}</span><h3>{project.name}</h3></div>
          <span className="project-number">{project.number}</span>
        </div>
        <p className="project-challenge">{project.challenge}</p>
        <div className="project-card-bottom">
          <span className="project-status-copy">{project.status}</span>
          <span className="project-link-icon" aria-hidden="true">↗</span>
        </div>
      </div>
      <button className="project-open transition-all duration-300 motion-reduce:transition-none" type="button" onClick={() => onOpen(project)} aria-label={`View details for ${project.name}`}>
        <span>VIEW PROJECT DETAILS <b aria-hidden="true">↗</b></span>
      </button>
    </article>
  );
}

function ProjectDialog({ project, onDismiss }: { project: PortfolioProject | null; onDismiss: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) event.currentTarget.close();
  }

  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      onClose={onDismiss}
      onClick={handleBackdropClick}
    >
      {project && (
        <article className="project-dialog-content">
          <header className="dialog-header">
            <div><span>{project.number} / {project.category}</span><p>{project.status}</p></div>
            <button className="dialog-close focus-visible:outline focus-visible:outline-2" type="button" onClick={() => dialogRef.current?.close()} autoFocus aria-label="Close project details">×</button>
          </header>
          <h2 id="project-dialog-title">{project.name}</h2>
          <p className="dialog-summary">{project.solution}</p>
          <div className="dialog-detail-grid">
            <section><h3>Challenge</h3><p>{project.challenge}</p></section>
            <section><h3>Architecture notes</h3><p>{project.architecture}</p></section>
            <section><h3>Project scope</h3><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
            <section><h3>Impact metrics</h3><p>{project.metrics ?? "No verified impact metrics were supplied for this project."}</p></section>
          </div>
          <div className="dialog-footer">
            <div className="dialog-technologies">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            <div className="dialog-project-links">
              {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live project ↗</a>}
              {!project.githubUrl && !project.liveUrl && <span>Repository and live demo links not supplied.</span>}
            </div>
          </div>
        </article>
      )}
    </dialog>
  );
}

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <>
      <div className="project-grid">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
        ))}
      </div>
      <ProjectDialog project={selectedProject} onDismiss={() => setSelectedProject(null)} />
    </>
  );
}