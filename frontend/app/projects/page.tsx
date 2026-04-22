import portfolio from "@/lib/portfolioData";
import ProjectsSection from "@/components/sections/ProjectsSection";
import styles from "./projects.module.css";

export const metadata = { title: "Projects — Harshath Mukundan" };

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <span className={styles.pageTag}>All Work</span>
        <h1 className={styles.pageTitle}>Projects</h1>
        <p className={styles.pageSub}>
          Full-stack systems, deep learning pipelines, and AI-powered applications.
        </p>
      </div>
      <ProjectsSection projects={portfolio.projects} />
    </div>
  );
}
