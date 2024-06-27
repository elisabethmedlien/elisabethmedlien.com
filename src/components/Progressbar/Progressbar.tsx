import { FC } from "react";

interface ProgressBarProps {
  value: number;
  max: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "#635f60",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            height: "10px",
            width: `${percentage}%`,
            backgroundColor: "#13f6c1",
            borderRadius: "8px",
            transition: "width 0.3s ease-in-out",
          }}
        />
      </div>
      <span>{Math.floor(percentage)}%</span>
    </div>
  );
};

export default ProgressBar;
