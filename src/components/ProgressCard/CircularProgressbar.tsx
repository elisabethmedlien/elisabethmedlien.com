import { FC } from "react";
import styles from "./CircularProgressBar.module.css";

interface CircularProgressBarProps {
  percentage: number;
  label: string;
}

const CircularProgressBar: FC<CircularProgressBarProps> = ({
  percentage,
  label,
}) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={styles.progressContainer}>
      <svg className={styles.progressRing} width="120" height="120">
        {/* Uferdig bakgrunnsirkel */}
        <circle
          stroke="#635f60" // Farge på den uferdige delen
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        {/* Fremdriftssirkel */}
        <circle
          className={styles.progressRingCircle}
          stroke="#0cf6c1" // Fremdriftsfarge
          strokeWidth="10"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset,
          }}
        />
      </svg>
      <div className={styles.progressLabel}>{label}</div>
    </div>
  );
};

export default CircularProgressBar;
