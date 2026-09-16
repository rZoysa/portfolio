import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiSmartphone,
} from "react-icons/fi";

const entrance = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const heroMotion = prefersReducedMotion
    ? { initial: false }
    : {
        initial: "hidden",
        animate: "visible",
        transition: { staggerChildren: 0.11, delayChildren: 0.08 },
      };
  const itemMotion = prefersReducedMotion
    ? {}
    : { variants: entrance, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } };

  return (
    <section
      id="home"
      className="hero section-shell"
      aria-labelledby="hero-title"
    >
      <div className="container hero-grid">
        <motion.div className="hero-copy" {...heroMotion}>
          <motion.div className="eyebrow hero-eyebrow" {...itemMotion}>
            <span className="status-pulse" /> FLUTTER DEVELOPER / SOFTWARE
            ENGINEER
          </motion.div>
          <motion.h1 id="hero-title" {...itemMotion}>
            I build mobile apps that <em>make an impact.</em>
          </motion.h1>
          <motion.p className="hero-description" {...itemMotion}>
            Hey, I'm Rithik - a software engineer focused on Flutter and Dart. I
            turn product ideas into intuitive, cross-platform experiences, from
            clean interfaces to API integrations and app releases.
          </motion.p>
          <motion.div className="hero-actions" {...itemMotion}>
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
          </motion.div>
          <motion.div className="hero-social" {...itemMotion} aria-label="Professional profiles">
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
          </motion.div>
        </motion.div>
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
          <motion.div
            className="device"
            aria-hidden="true"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28, rotate: 5 }}
            animate={prefersReducedMotion
              ? { opacity: 1, rotate: 9 }
              : { opacity: 1, y: [0, -8, 0], rotate: 9 }}
            transition={prefersReducedMotion
              ? { duration: 0 }
              : { y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.3 }, opacity: { duration: 0.8, delay: 0.3 }, rotate: { duration: 0.9, delay: 0.3 } }}
          >
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
          </motion.div>
          <motion.div
            className="float-card float-card-one"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0.72 }}
          >
            <span className="float-icon">✳</span>
            <div>
              <small>BUILDING FOR</small>
              <strong>Android & iOS</strong>
            </div>
          </motion.div>
          <motion.div
            className="float-card float-card-two"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7, delay: prefersReducedMotion ? 0 : 0.86 }}
          >
            <span className="float-indicator" />
            <div>
              <small>FROM IDEA TO</small>
              <strong>Production release</strong>
            </div>
            <FiArrowUpRight aria-hidden="true" />
          </motion.div>
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
