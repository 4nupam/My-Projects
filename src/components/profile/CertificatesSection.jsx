import { motion as Motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { cardEntrance } from "../../animations";

export default function CertificatesSection({ certificates }) {
  return (
    <section className="content-section">
      <SectionHeader eyebrow="05" title="Certificates" />
      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <Motion.a
            className="info-card certificate-card"
            href={certificate.link}
            key={certificate.name}
            target="_blank"
            rel="noreferrer"
            variants={cardEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -4, borderColor: "var(--border-hover)" }}
          >
            <span>Certificate</span>
            <h3>{certificate.name}</h3>
            <b aria-hidden="true">↗</b>
          </Motion.a>
        ))}
      </div>
    </section>
  );
}
