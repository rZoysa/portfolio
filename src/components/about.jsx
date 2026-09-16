import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="about section-shell"
      aria-labelledby="about-title"
    >
      <div className="container about-layout">
        <Reveal className="about-mark" aria-hidden="true">
          <div className="about-symbol">
            R<span>.</span>
          </div>
          <span>CURIOUS BY NATURE. ENGINEER BY PRACTICE.</span>
        </Reveal>
        <Reveal className="about-content" delay={0.12}>
          <span className="eyebrow">
            <span className="section-index">04 /</span> A LITTLE ABOUT ME
          </span>
          <h2 id="about-title">
            Technology is the tool.
            <br />
            <em>People are the point.</em>
          </h2>
          <p>
            I'm Rithik Zoysa, a Flutter developer and software engineer based in
            Panadura, Sri Lanka. I enjoy combining thoughtful interface design
            with the engineering that makes applications dependable in everyday
            use.
          </p>
          <p>
            My work spans production mobile apps, responsive web platforms,
            backend integrations, and deployment workflows. I care about clean
            implementations, learning continuously, and collaborating with
            people to make useful products.
          </p>
          <div className="location-line">
            <FiMapPin aria-hidden="true" /> Panadura, Sri Lanka
          </div>
          <div className="education-block">
            <h3>
              Education <span>↗</span>
            </h3>
            <div className="education-item">
              <span>2025</span>
              <div>
                <strong>
                  BSc (Hons) Computer Science and Software Engineering
                </strong>
                <p>
                  University of Bedfordshire · Delivered through SLIIT City
                  University
                </p>
              </div>
            </div>
            <div className="education-item">
              <span>2021 - 2023</span>
              <div>
                <strong>Graduate Higher Diploma in Software Engineering</strong>
                <p>SLIIT City University</p>
              </div>
            </div>
          </div>
          <a className="text-link" href="#contact">
            Let's connect <FiArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
