import { FC, ReactNode } from "react";
import "./InfoPanel.css";

interface InfoPanel {
  children: ReactNode | ReactNode[];
}

const InfoPanel: FC<InfoPanel> = ({ children }) => {
  return <div className="info-panel">{children}</div>;
};

export default InfoPanel;
