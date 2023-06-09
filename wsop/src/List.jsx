import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Card from "./Card";
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
        {data.data.collection_collection[0].entities.map((video, index) => (
          <Link to={`/${index}`} key={video.id}>
            <Card props={video} key={video.id} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default List;
