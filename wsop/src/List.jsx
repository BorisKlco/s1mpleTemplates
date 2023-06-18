import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import fetchEvents from "./fetchEvents";

const List = () => {
  const { data, isLoading } = useQuery(["fetch"], fetchEvents);
  const [info, setInfo] = useState(false);

  if (isLoading) return "Loading...";

  return (
    <>
      <div className="info">
        <h2>{data.data.title}</h2>
        <h3>{data.data.description}</h3>
      </div>

      <div className="list">
        {data.data.collection_collection[0].entities.map((video) => (
          <div
            onMouseEnter={() => setInfo(true)}
            onMouseLeave={() => setInfo(false)}
            className="videoImg"
            key={video.id}
          >
            <img src={video.images[0].url} alt={video.title} />
            {info ? <p>{video.description}</p> : <p>Hi</p>}
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
