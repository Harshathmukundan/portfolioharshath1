import { SkillGroup } from "@/lib/api";
import styles from "./SkillsSection.module.css";

interface Props {
  skills: SkillGroup[];
}

export default function SkillsSection({ skills }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>Skills</span>
        <h2 className={styles.title}>Tech Stack</h2>
      </div>
      <div className={styles.grid}>
        {skills.map((group) => (
          <div key={group.category} className={styles.group}>
            <div className={styles.groupName}>{group.category}</div>
            <div className={styles.tags}>
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className={`${styles.tag2} ${item.hot ? styles.hot : ""}`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
