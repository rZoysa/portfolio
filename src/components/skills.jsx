import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills section-shell"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="section-intro">
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
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
