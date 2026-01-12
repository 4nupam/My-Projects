import Data from "../DataStore/Profile.json";

export default function ProfileSection() {
  const { profile, skills, education, certificates } = Data;

  return (
    <section className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* ===== PROFILE HEADER ===== */}
      <header className="max-w-5xl mx-auto text-center md:text-left">
        {/* Name */}
        {profile?.name && (
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-blue-800">
            {profile.name}
          </h2>
        )}

        {/* Title */}
        {profile?.title && (
          <p className="mt-1 text-xl text-gray-700 dark:text-blue-600">
            {profile.title}
          </p>
        )}

        {/* Personal Brand Statement */}
        {profile?.personalBrandStatement && (
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-600">
            {profile.personalBrandStatement}
          </p>
        )}

        {/* Summary */}
        {profile?.summary && (
          <p className="mt-6 text-gray-700 dark:text-gray-600 leading-relaxed">
            {profile.summary}
          </p>
        )}

        {/* Media Links */}
        {profile?.media?.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            {profile.media.map((mediaItem, idx) => (
              <a
                key={idx}
                href={mediaItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline transition-colors duration-200 dark:text-blue-400"
              >
                {mediaItem.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ===== WORK EXPERIENCE ===== */}
      {profile?.companies?.length > 0 && (
        <div className="mt-12 max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-black">
            Work Experience
          </h3>
          <ul className="space-y-3">
            {profile.companies.map((company, idx) => (
              <li
                key={idx}
                className="flex flex-col md:flex-row md:justify-between md:items-center border-b py-3"
              >
                <span className="font-medium text-gray-800 dark:text-gray-900">
                  {company.name}
                </span>
                <span className="text-gray-500 text-sm dark:text-gray-700">
                  {company.term}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
{/* ===== SKILLS ===== */}
{skills && (
  <div className="mt-20 max-w-5xl mx-auto">
    <h3 className="mb-6 text-2xl font-bold text-gray-900">
      Skills & Technologies
    </h3>

    <div className="border-t border-gray-300">
      {Object.entries(skills)
        .filter(([key]) => key !== "otherTools")
        .map(([group, categories]) => (
          <div key={group}>
            {/* Group Title */}
            <div className="py-4 font-bold text-blue-800 uppercase text-xl">
              {group.replace(/([A-Z])/g, " $1")}
            </div>

            {/* Categories */}
            {Object.entries(categories).map(([category, items]) => (
              <div
                key={category}
                className="flex flex-col md:flex-row md:justify-between gap-2 py-3 border-b border-gray-300"
              >
                {/* Left column */}
                <span className="font-medium text-gray-800 capitalize">
                  {category.replace(/([A-Z])/g, " $1")}
                </span>

                {/* Right column */}
                <span className="text-gray-700 text-sm md:text-right max-w-3xl">
                  {items.join(", ")}
                </span>
              </div>
            ))}
          </div>
        ))}

      {/* ===== OTHER TOOLS ===== */}
      {skills.otherTools?.length > 0 && (
        <div className="mt-6">
          <div className="py-4 font-bold text-xl uppercase text-blue-800">
            Other Tools
          </div>

          <div className="flex flex-col md:flex-row md:justify-between py-3 border-b border-gray-300">
            <span className="font-medium text-gray-800">Tools</span>
            <span className="text-gray-700 text-sm md:text-right max-w-3xl">
              {skills.otherTools.join(", ")}
            </span>
          </div>
        </div>
      )}
    </div>
  </div>
)}


      {/* ===== CERTIFICATES ===== */}
      {certificates?.length > 0 && (
        <div className="mt-12 max-w-5xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-black">
            Certificates
          </h3>
          <div className="flex flex-wrap gap-3">
            {certificates.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border text-sm bg-gray-50 hover:bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {cert.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* ===== EDUCATION ===== */}
      {education?.length > 0 && (
        <div className="mt-12 max-w-5xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-black">
            Education
          </h3>
          <ul className="space-y-3">
            {education.map((edu, idx) => (
              <li key={idx} className="flex flex-col md:flex-row md:justify-between md:items-center border-b py-3">
                <span className="font-bold text-gray-800 dark:text-gray-800">{edu.institution}</span>
                <span className="text-gray-500 text-sm dark:text-gray-800">
                  {edu.degree} | {edu.term} | CGPA: {edu.grade}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
