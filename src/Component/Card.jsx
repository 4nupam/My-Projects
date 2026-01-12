import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Modal from "./Modal";

export default function Card({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setOpen(true)}
        className="w-full h-full cursor-pointer rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition flex flex-col"
      >
        {/* Category badge */}
        <span className="self-start px-2 py-1 text-xs font-semibold bg-gray-200 rounded-full mb-2 text-gray-700">
          {data.category.toUpperCase()}
        </span>

        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          {data.name}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-4 flex-1">
          {data.description}
        </p>

        {/* Tech stack chips */}
        <div className="mt-3 flex flex-wrap gap-2">
          {data.techStack?.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Animated Live Link Button */}
        {data?.url && (
          <div className="mt-5">
            <motion.a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="
                inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                hover:shadow-lg hover:shadow-purple-500/30
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
              "
            >
              Live Demo
              <FiExternalLink className="text-base" />
            </motion.a>
          </div>
        )}
      </div>

      {/* Modal */}
      {open && <Modal data={data} onClose={() => setOpen(false)} />}
    </>
  );
}
