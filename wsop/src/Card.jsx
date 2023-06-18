import { useState } from "react";
const Card = ({ props }) => {
  const [info, setInfo] = useState(false);
  return (
    <div
      onMouseEnter={() => setInfo(true)}
      onMouseLeave={() => setInfo(false)}
      className="videoImg"
      key={props.id}
    >
      <img src={props.images[0].url} alt={props.title} />
      <p>
        Duration:
        {Math.floor(props.duration / 3600)
          ? Math.floor(props.duration / 3600) +
            "h " +
            Math.floor((props.duration % 3600) / 60) +
            "m"
          : Math.floor((props.duration % 3600) / 60) + "m"}
      </p>
      {info ? <p>{props.description}</p> : <p>{props.title}</p>}
    </div>
  );
};

export default Card;
