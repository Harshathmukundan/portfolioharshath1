import { PortfolioData } from "@/lib/api";
import styles from "./JdMatchBanner.module.css";

interface Props {
  jdMatch: PortfolioData["jdMatch"];
}

export default function JdMatchBanner({ jdMatch }: Props) {
  return (
    <div className={styles.banner}>
      <div className={styles.title}>
      </div>
      <div className={styles.pills}>
        {jdMatch.matches.map((m) => (
          <span key={m} className={styles.pill}>{m}</span>
        ))}
      </div>
    </div>
  );
}
