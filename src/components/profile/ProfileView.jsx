import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceTimeline from "./ExperienceTimeline";
import EducationSection from "./EducationSection";
import CertificatesSection from "./CertificatesSection";

export default function ProfileView({ data, projectCount }) {
  return (
    <div className="view-shell">
      <AboutSection profile={data.profile} projectCount={projectCount} />
      <SkillsSection skills={data.skills} />
      <ExperienceTimeline companies={data.profile.companies} />
      <EducationSection education={data.education} />
      <CertificatesSection certificates={data.certificates} />
    </div>
  );
}
