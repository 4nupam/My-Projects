import { motion as Motion } from "framer-motion";

const tabs = [
  { id: "profile", label: "Profile" },
  { id: "projects", label: "Projects" },
];

export default function TabBar({ activeTab, onTabChange }) {
  return (
    <div className="tabbar-wrap" id="portfolio-tabs">
      <div className="tabbar" role="tablist" aria-label="Portfolio sections">
        {tabs.map((tab) => (
          <button
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
            type="button"
          >
            <span>{tab.label}</span>
            {activeTab === tab.id && (
              <Motion.span
                className="tab-indicator"
                layoutId="tab-indicator"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
