import { portfolioApi } from "@/lib/api";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertsSection from "@/components/sections/CertsSection";
import styles from "./about.module.css";

export const metadata = { title: "About — Harshath Mukundan" };

export default async function AboutPage() {
  const data = await portfolioApi.getAll();
  const { profile, skills, experience, certifications } = data;

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <span className={styles.pageTag}>Background</span>
        <h1 className={styles.pageTitle}>About</h1>
      </div>

      <div className={styles.bioCard}>
        <div className={styles.bioGrid}>
          <div>
            <div className={styles.bioLabel}>University</div>
            <div className={styles.bioValue}>{profile.university}</div>
          </div>
          <div>
            <div className={styles.bioLabel}>Degree</div>
            <div className={styles.bioValue}>{profile.degree}</div>
          </div>
          <div>
            <div className={styles.bioLabel}>Batch</div>
            <div className={styles.bioValue}>{profile.batch}</div>
          </div>
          <div>
            <div className={styles.bioLabel}>CGPA</div>
            <div className={styles.bioValue}>{profile.cgpa} / 10</div>
          </div>
          <div>
            <div className={styles.bioLabel}>Location</div>
            <div className={styles.bioValue}>{profile.location}</div>
          </div>
          <div>
            <div className={styles.bioLabel}>Email</div>
            <div className={styles.bioValue}>
              <a href={`mailto:${profile.email}`} className={styles.bioLink}>{profile.email}</a>
            </div>
          </div>
        </div>
      </div>

      <SkillsSection skills={skills} />
      <ExperienceSection experience={experience} />
      <CertsSection certifications={certifications} />
    </div>
  );
}
