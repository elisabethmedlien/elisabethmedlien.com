import { FC } from "react";
import "./Video.css";

export enum VideoFormat {
  HORIZONTAL = "horizontal-video",
  VERTICAL = "vertical-video",
}

interface Video {
  videoId: string;
  title: string;
  format: VideoFormat;
}

const Video: FC<Video> = ({ videoId, title, format }) => {
  const src = `https://streamable.com/e/${videoId}?autoplay=1&nocontrols=1`;

  const HorizontalVideoHeight = 281;
  const VerticalVideoHeight = 891;
  return (
    <iframe
      className={format}
      title={title}
      src={src}
      width="500"
      height={
        format === VideoFormat.HORIZONTAL
          ? HorizontalVideoHeight
          : VerticalVideoHeight
      }
      allowFullScreen
      allow="autoplay"
    />
  );
};

export default Video;
