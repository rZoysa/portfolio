import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiSmartphone,
} from "react-icons/fi";

export default function Home() {
  return (
    <section
      id="home"
      className="hero section-shell"
      aria-labelledby="hero-title"
    >
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span className="status-pulse" /> FLUTTER DEVELOPER / SOFTWARE
            ENGINEER
          </div>
          <h1 id="hero-title">
            I build mobile apps that <em>make an impact.</em>
          </h1>
          <p className="hero-description">
            Hey, I'm Rithik - a software engineer focused on Flutter and Dart. I
            turn product ideas into intuitive, cross-platform experiences, from
            clean interfaces to API integrations and app releases.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <FiArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="button button-outline"
              href="/Rithik-Zoysa-CV.pdf"
              download
            >
              Download CV <FiDownload aria-hidden="true" />
            </a>
          </div>
          <div className="hero-social" aria-label="Professional profiles">
            <a
              href="https://github.com/rZoysa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <FiGithub aria-hidden="true" /> GitHub{" "}
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <span aria-hidden="true" className="social-divider" />
            <a
              href="https://www.linkedin.com/in/rithikzoysa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin aria-hidden="true" /> LinkedIn{" "}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div
          className="hero-visual"
          role="img"
          aria-label="Illustrative Flutter development graphic"
        >
          <div className="visual-grid" aria-hidden="true" />
          <div className="visual-orbit orbit-one" aria-hidden="true" />
          <div className="visual-orbit orbit-two" aria-hidden="true" />
          <div className="visual-small-label top-label">
            CRAFTED FOR THE SMALL SCREEN <span>↗</span>
          </div>
          <div className="device-shadow" aria-hidden="true" />
          <div className="device" aria-hidden="true">
            <div className="device-notch" />
            <div className="device-screen">
              <div className="device-top">
                <span>9:41</span>
                <span>●●●</span>
              </div>
              <div className="screen-topline">
                MOBILE / 001 <span>✳</span>
              </div>
              <div className="device-heading">
                Design.
                <br />
                Develop.
                <br />
                <span>Deliver.</span>
              </div>
              <div className="screen-spark">
                <FiSmartphone />
              </div>
              <div className="device-divider" />
              <div className="device-bottom">
                <span>FLUTTER + DART</span>
                <span>↗</span>
              </div>
              <div className="device-progress">
                <span />
              </div>
              <div className="device-bottom secondary">
                <span>ONE CODEBASE</span>
                <span>02 / 02</span>
              </div>
            </div>
          </div>
          <div className="float-card float-card-one">
            <span className="float-icon">✳</span>
            <div>
              <small>BUILDING FOR</small>
              <strong>Android & iOS</strong>
            </div>
          </div>
          <div className="float-card float-card-two">
            <span className="float-indicator" />
            <div>
              <small>FROM IDEA TO</small>
              <strong>Production release</strong>
            </div>
            <FiArrowUpRight aria-hidden="true" />
          </div>
          {/* <div className="visual-small-label bottom-label">
            AN ILLUSTRATION OF MY WORKFLOW / NOT AN APP SCREENSHOT
          </div> */}
        </div>
      </div>
      <div className="container hero-bottom">
        <span>
          <span className="tiny-line" /> BASED IN SRI LANKA · BUILDING FOR
          MOBILE & BEYOND
        </span>
        <a href="#projects">
          SCROLL TO EXPLORE <FiArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
