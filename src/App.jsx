
import { useMemo, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import "./App.css";
import profileData from "./data/profile.json";
import projectsData from "./data/projects.json";
import { tabContent } from "./animations";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TabBar from "./components/TabBar";
import ProfileView from "./components/profile/ProfileView";
import ProjectsView from "./components/projects/ProjectsView";

function App() {
  const [activeTab, setActiveTab] = useState("profile");

  const projectCount = useMemo(
    () => Object.values(projectsData.projects).flat().length,
    [],
  );

  return (
    <div className="app-shell">
      <Navbar name={profileData.profile.name} links={profileData.profile.media} />
      <HeroSection profile={profileData.profile} />
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />

      <main>
        <AnimatePresence mode="wait">
          <Motion.div
            key={activeTab}
            variants={tabContent}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {activeTab === "profile" ? (
              <ProfileView data={profileData} projectCount={projectCount} />
            ) : (
              <ProjectsView data={projectsData} />
            )}
          </Motion.div>
        </AnimatePresence>
      </main>

      <footer className="footer">
        <span>{profileData.profile.name}</span>
        <span>Frontend Engineer · React</span>
      </footer>
    </div>
  );
}

export default App;
