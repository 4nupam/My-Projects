import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Data from "../DataStore/Profile.json";
import Projects from "./Projects";
import ProfileSection from "./ProfileSections";

const TABS = ["profile", "projects"];

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export default function MainPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Animated Content */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === "profile" && (
            <motion.div
              key="profile"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <ProfileSection data={Data} />
            </motion.div>
          )}

          {activeTab === "projects" && (
            <motion.div
              key="projects"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Projects />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tabs */}
      <header className="w-full z-20 border-t md:border-t-0 md:border-b bg-white h-14 fixed bottom-0 md:absolute md:top-0">
        <div className="max-w-full mx-auto px-4 py-3 flex justify-center gap-4">
          {TABS.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileTap={{ scale: 0.95 }}
              className={`px-6 cursor-pointer py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeTab === tab
                    ? "bg-black text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {tab.toUpperCase()}
            </motion.button>
          ))}
        </div>
      </header>
    </main>
  );
}
