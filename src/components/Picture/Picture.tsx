import { FC } from "react";
import "./Picture.css";

interface Picture {
  src: string;
  alt: string;
}

const Picture: FC<Picture> = ({ src, alt }) => {
  return <img src={src} alt={alt} loading="lazy" width="500" />;
};

export default Picture;
