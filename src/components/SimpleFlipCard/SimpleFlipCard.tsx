import { FC } from "react";
import styles from "./SimpleFlipCard.module.css";

interface SimpleFlipCardProps {
  goal: string;
  list: { title: string; checked: boolean }[];
}

const SimpleFlipCard: FC<SimpleFlipCardProps> = ({ goal, list }) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <h2 className={styles.flipCardTitle}>{goal}</h2>
        </div>
        <div className={styles.flipCardBack}>
          <ul style={{ marginTop: 0, listStyleType: "none", fontSize: "7px" }}>
            {list.map((item) => (
              <li
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  id={item.title}
                  style={{ marginRight: "5px" }}
                />
                <label htmlFor={item.title} style={{ textAlign: "left" }}>
                  {item.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimpleFlipCard;
