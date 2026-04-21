import { portfolioApi } from "@/lib/api";
import HeroSection from "@/components/sections/HeroSection";
import JdMatchBanner from "@/components/sections/JdMatchBanner";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertsSection from "@/components/sections/CertsSection";
import styles from "./page.module.css";

// Server Component — data fetched at request time
export default async function HomePage() {
  let data;
  try {
    data = await portfolioApi.getAll();
  } catch {
    return (
      <div className={styles.error}>
        <p>Could not connect to API. Make sure the backend is running on port 5000.</p>
        <code>cd backend && npm run dev</code>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <JdMatchBanner jdMatch={data.jdMatch} />
      <HeroSection profile={data.profile} stats={data.stats} />
      <div className={styles.divider} />
      <SkillsSection skills={data.skills} />
      <ProjectsSection projects={data.projects} />
      <ExperienceSection experience={data.experience} />
      <CertsSection certifications={data.certifications} />
    </div>
  );
}
