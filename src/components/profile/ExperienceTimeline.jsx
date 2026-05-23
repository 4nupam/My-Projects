import { motion as Motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { fadeUp, easeOutExpo } from "../../animations";

export default function ExperienceTimeline({ companies }) {
  return (
    <section className="content-section">
      <SectionHeader eyebrow="03" title="Experience" />
      <div className="timeline">
        <Motion.span
          className="timeline-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
        />
        {companies.map((company, index) => (
          <Motion.article
            className="timeline-entry"
            key={`${company.name}-${company.term}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span className={`timeline-dot ${index === 0 ? "current" : ""}`} />
            <div>
              <header>
                <h3>{company.name}</h3>
                <time>{company.term}</time>
              </header>
              <p>Frontend Engineer</p>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}
