import {
  FiArrowRight,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact section-shell"
      aria-labelledby="contact-title"
    >
      <div className="container contact-panel">
        <div className="contact-top">
          <span className="eyebrow">
            <span className="section-index">05 /</span> GET IN TOUCH
          </span>
          <span>HAVE SOMETHING IN MIND? ↗</span>
        </div>
        <h2 id="contact-title">
          Let's build something <em>meaningful.</em>
        </h2>
        <p>
          Looking to connect about Flutter, mobile engineering, or a project?
          I'd love to hear about it.
        </p>
        <a className="contact-email" href="mailto:rithikzoysa@gmail.com">
          <FiMail aria-hidden="true" /> rithikzoysa@gmail.com{" "}
          <FiArrowUpRight aria-hidden="true" />
        </a>
        <div className="contact-bottom">
          <div className="contact-socials">
            <a
              href="https://github.com/rZoysa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub aria-hidden="true" /> GitHub{" "}
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/rithikzoysa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin aria-hidden="true" /> LinkedIn{" "}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <a href="#home" className="back-top">
            BACK TO TOP <FiArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
