import { FC, ReactNode } from "react";
import styles from "./HabitCard.module.css";

interface HabitCardProps {
  goal: string;
  children: ReactNode;
}

const HabitCard: FC<HabitCardProps> = ({ goal, children }) => {
  return (
    <div className={styles.card}>
      <h2>{goal}</h2>
      {children}
    </div>
  );
};

export default HabitCard;
