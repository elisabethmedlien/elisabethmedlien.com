import { FC } from "react";
import styles from "./ProgressCard.module.css";
import CircularProgressBar from "./CircularProgressbar";

interface ProgressCardProps {
  goal: string;
  percentage: number;
  label?: string;
}

const ProgressCard: FC<ProgressCardProps> = ({ goal, percentage, label }) => {
  return (
    <div className={styles.card}>
      <CircularProgressBar
        percentage={percentage}
        label={label || percentage.toString() + "%"}
      />
      <h2 className={styles.cardTitle}>{goal}</h2>
    </div>
  );
};

export default ProgressCard;
