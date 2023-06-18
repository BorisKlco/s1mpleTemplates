import { useQuery } from "@tanstack/react-query";
import fetchEvents from "./fetchEvents";

const List = () => {
  const { data, isLoading } = useQuery(["fetch"], fetchEvents);

  if (isLoading) return "Loading...";

  return (
    <>
      <div className="info">
        <h2>{data.data.title}</h2>
        <h3>{data.data.description}</h3>
      </div>

      <div className="list">
        {data.data.collection_collection[0].entities.map((video) => (
          <div key={video.id}>
            <p>{video.title}</p>
            <img src={video.images[0].url} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
