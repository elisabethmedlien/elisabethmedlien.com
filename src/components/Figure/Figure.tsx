import { FC, ReactNode } from "react";
import "./Figure.css";

export enum FigureFormat {
  VIDEO = "Video",
  IMAGE = "Bilde",
}

interface Figure {
  caption: string;
  format: FigureFormat;
  children: ReactNode | ReactNode[];
}

const Figure: FC<Figure> = ({ caption, format, children }) => {
  return (
    <figure>
      {children}
      <figcaption>
        {format}: {caption}
      </figcaption>
    </figure>
  );
};

export default Figure;
