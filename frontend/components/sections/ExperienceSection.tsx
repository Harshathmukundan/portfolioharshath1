import { Experience } from "@/lib/api";
import styles from "./ExperienceSection.module.css";

interface Props {
  experience: Experience[];
}

export default function ExperienceSection({ experience }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>Experience</span>
        <h2 className={styles.title}>Research & Work</h2>
      </div>
      <div className={styles.list}>
        {experience.map((e, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.role}>{e.role}</div>
              <span className={styles.period}>{e.period}</span>
            </div>
            <div className={styles.org}>{e.org}</div>
            <ul className={styles.bullets}>
              {e.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
