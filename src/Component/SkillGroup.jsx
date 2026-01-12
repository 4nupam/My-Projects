import Data from "../DataStore/Profile.json";

export default function ProfileSection() {
  const { profile, skills, education, certificates } = Data;

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* ===== PROFILE HEADER ===== */}
      <header className="max-w-3xl">
        {/* Name */}
        {profile?.name && (
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            {profile.name}
          </h2>
        )}

        {/* Title */}
        {profile?.title && (
          <p className="mt-1 text-xl text-gray-700">{profile.title}</p>
        )}

        {/* Personal Brand Statement */}
        {profile?.personalBrandStatement && (
          <p className="mt-4 text-lg text-gray-600">{profile.personalBrandStatement}</p>
        )}

        {/* Summary */}
        {profile?.summary && (
          <p className="mt-6 text-gray-700 leading-relaxed">{profile.summary}</p>
        )}

        {/* ===== MEDIA LINKS ===== */}
        {profile?.media?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {profile.media.map((mediaItem, idx) => (
              <a
                key={idx}
                href={mediaItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {mediaItem.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ===== COMPANIES / WORK EXPERIENCE ===== */}
      {profile?.companies?.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
          <ul className="space-y-3">
            {profile.companies.map((company, idx) => (
              <li key={idx} className="flex flex-col md:flex-row md:justify-between md:items-center border-b py-2">
                <span className="font-medium text-gray-800">{company.name}</span>
                <span className="text-gray-500 text-sm">{company.term}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ===== CERTIFICATES ===== */}
      {certificates?.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Certificates</h3>
          <div className="flex flex-wrap gap-3">
            {certificates.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border text-sm bg-gray-50 hover:bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                {cert.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
