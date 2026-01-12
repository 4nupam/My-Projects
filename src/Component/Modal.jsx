import { useEffect } from "react";

export default function Modal({ data, onClose }) {
  if (!data) return null;

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center px-2 md:px-4"
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-3xl
          bg-white shadow-2xl
          rounded-t-2xl md:rounded-2xl
          max-h-[92vh] overflow-y-auto
          p-6 md:p-8
          animate-in slide-in-from-bottom-4 fade-in duration-200
        "
      >
        {/* Drag Handle (Mobile) */}
        <div className="md:hidden w-10 h-1.5 bg-gray-300 rounded-full mx-auto mb-4" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Category */}
        {data.category && (
          <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold bg-gray-100 rounded-full text-gray-700">
            {data.category.toUpperCase()}
          </span>
        )}

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
          {data.name}
        </h2>

        {/* Description */}
        {data.description && (
          <p className="text-gray-700 leading-relaxed mb-8">
            {data.description}
          </p>
        )}

        {/* Tech Stack */}
        {data.techStack?.length > 0 && (
          <section className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Features */}
        {data.features?.length > 0 && (
          <section className="mb-8">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              Key Features
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {data.features.map((feature, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-black">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Meta Info */}
        <section className="space-y-3 text-sm text-gray-700 mb-8">
          {data.role && (
            <div>
              <strong className="text-gray-900">Role:</strong> {data.role}
            </div>
          )}

          {data.challenges && (
            <div>
              <strong className="text-gray-900">Challenges:</strong>{" "}
              {data.challenges}
            </div>
          )}

          {data.learnings && (
            <div>
              <strong className="text-gray-900">Learnings:</strong>{" "}
              {data.learnings}
            </div>
          )}
        </section>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          {data.url && (
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:opacity-90"
            >
              Live Project
            </a>
          )}

          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
