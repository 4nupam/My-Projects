import { motion as Motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeUp, staggerContainer } from "../../animations";

export default function AboutSection({ profile, projectCount }) {
  const stats = [
    { value: "3+", label: "Years experience" },
    { value: profile.companies.length, label: "Companies" },
    { value: `${projectCount}+`, label: "Projects shipped" },
  ];

  return (
    <section className="content-section">
      <SectionHeader eyebrow="01" title="About" />
      <Motion.div
        className="about-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <Motion.p className="about-copy" variants={fadeUp}>
          {profile.summary}
        </Motion.p>
        <Motion.div className="stat-panel" variants={fadeUp}>
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </Motion.div>
      </Motion.div>
    </section>
  );
}
