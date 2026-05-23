import { AnimatePresence, motion as Motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects }) {
  if (!projects.length) {
    return (
      <Motion.div
        className="empty-state"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        No projects found for this filter.
      </Motion.div>
    );
  }

  return (
    <Motion.div className="projects-grid" layout>
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            index={index}
            key={`${project.category}-${project.name}`}
          />
        ))}
      </AnimatePresence>
    </Motion.div>
  );
}
