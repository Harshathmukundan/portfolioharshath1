import portfolio from "@/lib/portfolioData";
import HeroSection from "@/components/sections/HeroSection";
import JdMatchBanner from "@/components/sections/JdMatchBanner";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertsSection from "@/components/sections/CertsSection";
import styles from "./page.module.css";

export default function HomePage() {
  const { profile, stats, skills, projects, experience, certifications, jdMatch } = portfolio;

  return (
    <div className={styles.page}>
      <JdMatchBanner jdMatch={jdMatch} />
      <HeroSection profile={profile} stats={stats} />
      <div className={styles.divider} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experience={experience} />
      <CertsSection certifications={certifications} />
    </div>
  );
}
