/* eslint-disable jsx-a11y/media-has-caption */
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchVideo from "./fetchVideo";

const Video = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["video", id], fetchVideo);

  if (isLoading) return "Loading...";

  const video = data.playlist[0].sources[3];
  console.log(data.playlist[0]);

  return (
    <div>
      <video>
        <source src={video.file} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
