import Link from "next/link";
import { Project } from "@/lib/api";
import styles from "./ProjectsSection.module.css";

interface Props {
  projects: Project[];
}

const badgeClass: Record<string, string> = {
  full: styles.badgeFull,
  ai: styles.badgeAi,
  ml: styles.badgeMl,
};

export default function ProjectsSection({ projects }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>Projects</span>
        <h2 className={styles.title}>Selected Work</h2>
      </div>
      <div className={styles.list}>
        {projects.map((p) => (
          <div key={p.id} className={styles.item}>
            <span className={`${styles.badge} ${badgeClass[p.badgeType]}`}>{p.badge}</span>
            <div className={styles.num}>{p.num}</div>
            <div className={styles.name}>{p.name}</div>
            <p className={styles.desc}>{p.description}</p>
            <div className={styles.stack}>
              {p.stack.map((s) => (
                <span key={s} className={styles.stackTag}>{s}</span>
              ))}
            </div>
            <div className={styles.links}>
              <a href={p.github} target="_blank" rel="noreferrer" className={styles.link}>
                GitHub →
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className={styles.link}>
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
