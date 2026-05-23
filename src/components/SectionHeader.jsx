import { motion as Motion } from "framer-motion";
import { easeOutExpo } from "../animations";

export default function SectionHeader({ eyebrow, title }) {
  return (
    <div className="section-header">
      <div>
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      <Motion.span
        className="section-rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: easeOutExpo }}
      />
    </div>
  );
}
