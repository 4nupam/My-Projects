import { motion as Motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { cardEntrance } from "../../animations";

export default function EducationSection({ education }) {
  return (
    <section className="content-section">
      <SectionHeader eyebrow="04" title="Education" />
      <div className="education-grid">
        {education.map((item) => (
          <Motion.article
            className="info-card"
            key={`${item.institution}-${item.term}`}
            variants={cardEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <span>{item.term}</span>
            <h3>{item.institution}</h3>
            <p>{item.degree}</p>
            <strong>{item.grade}</strong>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}
