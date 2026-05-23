import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import FilterBar from "./FilterBar";
import ProjectsGrid from "./ProjectsGrid";
import SectionHeader from "../SectionHeader";
import { fadeUp, staggerContainer } from "../../animations";

export default function ProjectsView({ data }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const allProjects = useMemo(
    () =>
      Object.entries(data.projects).flatMap(([category, projects]) =>
        projects.map((project) => ({ ...project, category })),
      ),
    [data],
  );

  const counts = useMemo(() => {
    const base = { all: allProjects.length };
    Object.entries(data.projects).forEach(([category, projects]) => {
      base[category] = projects.length;
    });
    return base;
  }, [allProjects.length, data.projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return allProjects;
    }

    return allProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter, allProjects]);

  return (
    <div className="view-shell">
      <section className="content-section projects-section">
        <SectionHeader eyebrow="Selected Work" title="Projects" />
        <Motion.div
          className="projects-intro"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <Motion.p variants={fadeUp}>
            Production interfaces, dashboards, PWAs, mobile experiments, and client work shaped around performance, clarity, and polished interaction.
          </Motion.p>
          <FilterBar activeFilter={activeFilter} counts={counts} onChange={setActiveFilter} />
        </Motion.div>
        <ProjectsGrid projects={filteredProjects} />
      </section>
    </div>
  );
}
