import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./Card";
import projectsData from "../DataStore/ProjectSection.json";

const FILTERS = [
  { label: "All Projects", value: "all" },
  { label: "Websites", value: "websites" },
  { label: "PWA", value: "pwa" },
  { label: "Dashboards", value: "dashboards" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "Freelance", value: "freelance" },
  { label: "UI Samples", value: "uiSamples" }
];

// List of "Featured" projects by name
const FEATURED_PROJECTS = [
  "Mastersaab Education Platform",
  "Orbexa (Full Stack)",
  "Restaurant PWA"
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");

  // Flatten projects and attach category
  const allProjects = useMemo(() => {
    return Object.entries(projectsData.projects).flatMap(
      ([category, projects]) =>
        projects.map((project) => ({
          ...project,
          category
        }))
    );
  }, []);

  // Apply filter, search, and bring "featured" projects first
  const filteredProjects = useMemo(() => {
    let projects = allProjects;

    // Filter by category
    if (activeFilter !== "all") {
      projects = projects.filter((p) => p.category === activeFilter);
    }

    // Search filter
    if (search.trim()) {
      projects = projects.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Bring featured projects first
    const featured = [];
    const others = [];
    projects.forEach((p) => {
      if (FEATURED_PROJECTS.includes(p.name)) {
        featured.push(p);
      } else {
        others.push(p);
      }
    });

    return [...featured, ...others];
  }, [activeFilter, search, allProjects]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="text-gray-500 mt-2">
          A curated selection of production-grade applications and real-world work
        </p>
      </div>

      {/* Filters + Search */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 mb-12">
        <select
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm
                     focus:outline-none focus:ring-2 focus:ring-black"
        >
          {FILTERS.map((filter) => (
            <option key={filter.value} value={filter.value}>
              {filter.label}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm w-full sm:w-64"
        />
      </div>

      {/* Project Grid with animation */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card data={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No projects found for this category.
        </p>
      )}
    </section>
  );
}
