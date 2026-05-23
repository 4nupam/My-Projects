import { motion as Motion } from "framer-motion";

const filters = [
  { label: "All", value: "all" },
  { label: "Websites", value: "websites" },
  { label: "Dashboards", value: "dashboards" },
  { label: "PWA", value: "pwa" },
  { label: "Mobile", value: "mobile" },
  { label: "Freelance", value: "freelance" },
  { label: "UI Samples", value: "uiSamples" },
];

export default function FilterBar({ activeFilter, counts, onChange }) {
  return (
    <div className="filter-bar" aria-label="Project category filters">
      {filters.map((filter) => (
        <Motion.button
          className={`filter-pill ${activeFilter === filter.value ? "active" : ""}`}
          key={filter.value}
          onClick={() => onChange(filter.value)}
          type="button"
          whileTap={{ scale: 0.96 }}
        >
          {filter.label}
          <span>{counts[filter.value] || 0}</span>
        </Motion.button>
      ))}
    </div>
  );
}
