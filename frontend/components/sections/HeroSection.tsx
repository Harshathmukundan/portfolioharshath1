import Link from "next/link";
import { Profile, Stat } from "@/lib/api";
import styles from "./HeroSection.module.css";

interface Props {
  profile: Profile;
  stats: Stat[];
}

export default function HeroSection({ profile, stats }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.label}>Full Stack Developer · AI/ML Engineer</div>
      <h1 className={styles.name}>
        {profile.name.split(" ")[0]}
        <br />
        <span>{profile.name.split(" ").slice(1).join(" ")}</span>
      </h1>
      <p className={styles.sub}>{profile.tagline}</p>
      <div className={styles.actions}>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className={styles.btnPrimary}
        >
          View GitHub →
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className={styles.btnSecondary}
        >
          LinkedIn
        </a>
        <Link href="/contact" className={styles.btnSecondary}>
          Contact
        </Link>
      </div>
      <div className={styles.stats}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statNum}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
