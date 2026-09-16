import { motion, useReducedMotion } from "framer-motion";

// A single scroll-reveal policy: short, one-time, and absent for reduced motion.
// Render the original semantic element instead of nesting an extra div around cards.
export default function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  distance = 22,
  hoverLift = false,
  ...elementProps
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionElement = motion[as] || motion.div;

  return (
    <MotionElement
      {...elementProps}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: distance }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -35px 0px" }}
      transition={{ duration: 0.56, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={!prefersReducedMotion && hoverLift ? { y: -5 } : undefined}
    >
      {children}
    </MotionElement>
  );
}
