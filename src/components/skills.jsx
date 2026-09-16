import { skillGroups } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills section-shell"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <Reveal className="section-intro">
          <div>
            <span className="eyebrow">
              <span className="section-index">03 /</span> MY TOOLKIT
            </span>
            <h2 id="skills-title">
              A mobile-first mindset.
              <br />
              <em>A broader skill set.</em>
            </h2>
          </div>
          <p>
            Flutter is my specialty, supported by the frontend, backend, and
            cloud skills needed to build complete experiences.
          </p>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal as="article" key={group.title} className="skill-card" delay={index * 0.08} distance={18}>
              <div className="skill-number">
                {group.number} <span>↗</span>
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
