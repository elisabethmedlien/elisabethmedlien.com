import { FC, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import "./InfoPanel.css";

interface InfoPanel {
  title: string;
  children: ReactNode | ReactNode[];
}

const InfoPanel: FC<InfoPanel> = ({ title, children }) => {
  return (
    <div className="info-panel">
      <div className="header">
        <FontAwesomeIcon icon={faCircleInfo} />
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default InfoPanel;
