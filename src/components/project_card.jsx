import { useState } from "react";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiLock,
  FiSmartphone,
} from "react-icons/fi";

function ProjectVisual({ project }) {
  const [activeImage, setActiveImage] = useState(0);

  if (project.images?.length) {
    const image = project.images[activeImage];
    return (
      <div
        className={`project-image-stage ${project.id === "standard-industries" ? "stage-standard" : "stage-glamour"}`}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          width="1292"
          height="1358"
        />
        {project.images.length > 1 && (
          <div
            className="image-controls"
            role="group"
            aria-label={`${project.name} screenshot controls`}
          >
            <button
              type="button"
              aria-label={`Previous ${project.name} screenshot`}
              onClick={() =>
                setActiveImage(
                  (index) =>
                    (index - 1 + project.images.length) % project.images.length,
                )
              }
            >
              <FiChevronLeft aria-hidden="true" />
            </button>
            <span aria-live="polite">
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(project.images.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              aria-label={`Next ${project.name} screenshot`}
              onClick={() =>
                setActiveImage((index) => (index + 1) % project.images.length)
              }
            >
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>
        )}
        <span className="stage-caption">EXISTING PROJECT SCREENSHOTS</span>
      </div>
    );
  }

  if (project.visual === "agro") {
    return (
      <div
        className="project-image-stage stage-agro"
        role="img"
        aria-label="Abstract artwork for Yaya Agro, not an application screenshot"
      >
        <div className="artwork-orbit artwork-orbit-one" aria-hidden="true" />
        <div className="artwork-orbit artwork-orbit-two" aria-hidden="true" />
        <div className="agro-art" aria-hidden="true">
          <span className="agro-leaf">✳</span>
          <span className="agro-big">
            YAYA
            <br />
            <i>AGRO</i>
          </span>
          <span className="agro-sub">
            GROWING DIGITAL EXPERIENCES <FiArrowUpRight />
          </span>
        </div>
        <span className="stage-caption">
          ABSTRACT ARTWORK · SCREENSHOTS PENDING APPROVAL
        </span>
      </div>
    );
  }

  return (
    <div
      className="project-image-stage stage-inventory"
      role="img"
      aria-label="Illustrative inventory workflow graphic, not an application screenshot"
    >
      <div className="inventory-art" aria-hidden="true">
        <div className="inventory-art-head">
          <span>INVENTORY / OPERATIONS</span>
          <span>↗</span>
        </div>
        <div className="inventory-art-title">
          Every item.
          <br />
          <i>Accounted for.</i>
        </div>
        <div className="inventory-steps">
          <span>
            01
            <br />
            <strong>Receive</strong>
          </span>
          <span>→</span>
          <span>
            02
            <br />
            <strong>Allocate</strong>
          </span>
          <span>→</span>
          <span>
            03
            <br />
            <strong>Return</strong>
          </span>
        </div>
        <div className="inventory-bars">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <span className="stage-caption">
        WORKFLOW ILLUSTRATION · SCREENSHOTS PENDING APPROVAL
      </span>
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectVisual project={project} />
      <div className="project-content">
        <div className="project-meta">
          <span>{project.eyebrow}</span>
          <span>{project.number} / 04</span>
        </div>
        <h3>
          {project.name} <FiArrowUpRight aria-hidden="true" />
        </h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-contribution">
          <span>MY CONTRIBUTION</span>
          {project.contribution}
        </p>
        <div className="tech-list">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-footer">
          {project.url ? (
            <a
              className="project-action"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.urlLabel || "View project"}{" "}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span className="project-private">
              <FiLock aria-hidden="true" /> {project.visibility}
            </span>
          )}
          {project.type === "mobile" && (
            <FiSmartphone className="project-type-icon" aria-hidden="true" />
          )}
        </div>
      </div>
    </article>
  );
}
