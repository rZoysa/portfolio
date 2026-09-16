import { FiArrowUpRight } from "react-icons/fi";

const responsibilities = [
  "Develop and maintain production Flutter applications and responsive React web interfaces.",
  "Translate Figma designs into reusable components and integrate REST APIs with Provider state management, validation, and error handling.",
  "Contribute to Android and iOS releases, and build GitHub Actions workflows for container deployment to Google Cloud Run.",
  "Collaborate with backend developers and stakeholders in an Agile delivery environment.",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience section-shell"
      aria-labelledby="experience-title"
    >
      <div className="container experience-layout">
        <div className="experience-left">
          <span className="eyebrow">
            <span className="section-index">02 /</span> THE JOURNEY
          </span>
          <h2 id="experience-title">
            Experience that goes <em>beyond the code.</em>
          </h2>
          <p>
            Working across the product lifecycle - from an idea in Figma to the
            application people use.
          </p>
          <a href="/Rithik-Zoysa-CV.pdf" download className="text-link">
            Full experience in my CV <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="experience-right">
          <div className="experience-card">
            <div className="experience-card-top">
              <span className="experience-active">
                <span className="status-pulse" /> CURRENT ROLE
              </span>
              <span>JUN 2025 - PRESENT</span>
            </div>
            <div className="experience-role">
              <h3>Software Engineer</h3>
              <p>
                Fintelex Pvt Ltd <span> / </span> Sri Lanka
              </p>
            </div>
            <ul>
              {responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
            <div className="experience-chip-row">
              <span>Flutter</span>
              <span>React</span>
              <span>REST APIs</span>
              <span>GCP</span>
              <span>CI/CD</span>
            </div>
          </div>
          <p className="experience-footnote">
            Also delivering freelance mobile and web solutions for clients
            including Standard Industries and Dima Events.
          </p>
        </div>
      </div>
    </section>
  );
}
