import { FiArrowUpRight } from "react-icons/fi";
import ProjectCard from "./project_card";
import { additionalProjects, featuredProjects } from "../data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects section-shell"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section-intro">
          <div>
            <span className="eyebrow">
              <span className="section-index">01 /</span> SELECTED WORK
            </span>
            <h2 id="projects-title">
              Built with purpose<span className="accent-period">.</span>
            </h2>
          </div>
          <p>
            Production applications, client systems, and research work - a
            closer look at the problems I've helped solve and how I approached
            them.
          </p>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="more-work-heading">
          <div>
            <span className="eyebrow">MORE EXPLORATIONS</span>
            <h3>
              Beyond the day job<span className="accent-period">.</span>
            </h3>
          </div>
          <span className="more-work-note">
            PERSONAL & ACADEMIC BUILDS / 03
          </span>
        </div>
        <div className="more-work-grid">
          {additionalProjects.map((project, index) => (
            <article className="more-work-card" key={project.name}>
              <div className="more-work-image">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                  width="1292"
                  height="1358"
                />
              </div>
              <div className="more-work-copy">
                <span className="more-work-index">
                  0{index + 1} / EXPLORATION
                </span>
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div className="more-work-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="more-work-links">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source code <FiArrowUpRight aria-hidden="true" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
