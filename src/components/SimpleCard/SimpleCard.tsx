import { FC } from "react";
import styles from "./SimpleCard.module.css";

interface SimpleCardProps {
  goal: string;
  completed?: boolean;
}

const SimpleCard: FC<SimpleCardProps> = ({ goal, completed }) => {
  return (
    <div className={`${styles.card} ${completed && styles.cardCompleted}`}>
      <h2 className={styles.cardTitle}>{goal}</h2>
    </div>
  );
};

export default SimpleCard;
