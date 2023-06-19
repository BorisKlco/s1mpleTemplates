/* eslint-disable jsx-a11y/media-has-caption */
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { BigPlayButton, Player } from "video-react";
import "../node_modules/video-react/dist/video-react.css";
import fetchEvents from "./fetchEvents";
import fetchVideo from "./fetchVideo";

const Video = () => {
  const { id } = useParams();
  const fetchList = useQuery(["fetch"], fetchEvents);
  const collection = fetchList.data.data.collection_collection[0].entities[id];
  const videoSrc = collection.source;
  const videoStream = useQuery(["video", videoSrc], fetchVideo);

  if (videoStream.isLoading) return "Loading...";

  const video = videoStream.data.playlist[0].sources[3];
  const poster = videoStream.data.playlist[0].images[4];

  return (
    <div className="videoPlayer">
      <h1>{collection.title}</h1>
      <h3>{collection.description}</h3>
      <Player poster={poster.src} src={video.file}>
        <BigPlayButton position="center" />
      </Player>
    </div>
  );
};

export default Video;
