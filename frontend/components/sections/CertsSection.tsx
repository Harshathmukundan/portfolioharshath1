import { Certification } from "@/lib/api";
import styles from "./CertsSection.module.css";

interface Props {
  certifications: Certification[];
}

export default function CertsSection({ certifications }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tag}>Certifications</span>
        <h2 className={styles.title}>Credentials</h2>
      </div>
      <div className={styles.grid}>
        {certifications.map((c, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.issuer}>{c.issuer}</div>
            <div className={styles.name}>{c.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
