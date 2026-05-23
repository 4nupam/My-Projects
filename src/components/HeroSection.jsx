import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../animations";

const roles = ["Frontend Engineer", "React Developer", "UI Craftsman"];

export default function HeroSection({ profile }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2200);
    return () => window.clearInterval(interval);
  }, []);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  };

  return (
    <section className="hero" id="top" onMouseMove={handleMouseMove}>
      <Motion.div
        className="hero-inner"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <Motion.p className="hero-label" variants={fadeUp}>
          <span>{roles[roleIndex]}</span>
          <span className="type-cursor" aria-hidden="true" />
          <span className="label-divider">React</span>
        </Motion.p>
        <Motion.h1
          variants={fadeUp}
          transition={{ delay: 0, duration: 0.5 }}
        >
          {profile.name}
        </Motion.h1>
        <Motion.p
          className="hero-title"
          variants={fadeUp}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {profile.title}
        </Motion.p>
        <Motion.p
          className="hero-statement"
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {profile.personalBrandStatement}
        </Motion.p>
        <Motion.div
          className="hero-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          {profile.media.map((item) => (
            <a href={item.link} key={item.name} target="_blank" rel="noreferrer">
              {item.name} <span aria-hidden="true">↗</span>
            </a>
          ))}
          <a href="#portfolio-tabs">↓ View Work</a>
        </Motion.div>
      </Motion.div>
      <a className="scroll-cue" href="#portfolio-tabs" aria-label="Scroll to portfolio tabs">
        <span />
      </a>
    </section>
  );
}
