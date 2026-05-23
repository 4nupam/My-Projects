import { motion as Motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { easeOutExpo } from "../../animations";

const labelize = (value) =>
  value
    .replace(/([A-Z])/g, " $1")
    .replace(/And/g, "&")
    .replace(/^./, (letter) => letter.toUpperCase());

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

export default function SkillsSection({ skills }) {
  const groups = Object.entries(skills).flatMap(([groupName, group]) => {
    if (Array.isArray(group)) {
      return [{ groupName: labelize(groupName), category: "Tools", items: group }];
    }

    return Object.entries(group).map(([category, items]) => ({
      groupName: labelize(groupName),
      category: labelize(category),
      items,
    }));
  });

  return (
    <section className="content-section">
      <SectionHeader eyebrow="02" title="Skills" />
      <div className="skills-stack">
        {groups.map((group) => (
          <Motion.div
            className="skill-row"
            key={`${group.groupName}-${group.category}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div>
              <span className="skill-group">{group.groupName}</span>
              <h3>{group.category}</h3>
            </div>
            <Motion.div
              className="pill-wrap"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
              {group.items.map((item) => (
                <Motion.span
                  className="skill-pill"
                  variants={pillVariants}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "var(--accent-glow)",
                    borderColor: "var(--accent-dim)",
                  }}
                  key={item}
                >
                  {item}
                </Motion.span>
              ))}
            </Motion.div>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
