import { motion as Motion } from "framer-motion";
import { cardEntrance, easeOutExpo } from "../../animations";

const categoryLabels = {
  mobile: "Mobile",
  websites: "Website",
  pwa: "PWA",
  dashboards: "Dashboard",
  freelance: "Freelance",
  uiSamples: "UI Sample",
};

const categoryClass = {
  mobile: "cat-mobile",
  websites: "cat-websites",
  pwa: "cat-pwa",
  dashboards: "cat-dashboards",
  freelance: "cat-freelance",
  uiSamples: "cat-ui",
};

export default function ProjectCard({ project, index }) {
  const openProject = () => window.open(project.url, "_blank", "noopener,noreferrer");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      openProject();
    }
  };

  return (
    <Motion.article
      className="project-card"
      variants={cardEntrance}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -16, scale: 0.98 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{
        y: -4,
        borderColor: "var(--border-hover)",
        boxShadow: "0 0 40px var(--accent-glow)",
      }}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="project-card-top">
        <span className={`category-badge ${categoryClass[project.category] || ""}`}>
          {categoryLabels[project.category] || project.category}
        </span>
        <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
          ↗
        </a>
      </div>

      <h3>{project.name}</h3>
      <p>{project.description}</p>

      <div className="project-divider" />
      <Motion.div
        className="tech-list"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
      >
        {project.techStack.map((tech) => (
          <Motion.span
            key={tech}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.35, ease: easeOutExpo },
              },
            }}
          >
            {tech}
          </Motion.span>
        ))}
      </Motion.div>
    </Motion.article>
  );
}
