import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchVideo from "./fetchVideo";

const Video = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["video", id], fetchVideo);

  console.log(data);

  if (isLoading) return "Loading...";

  const video = data.playlist[0].sources[3];
  console.log(video);

  return (
    <div>
      <video src={video.file}></video>
    </div>
  );
};

export default Video;
