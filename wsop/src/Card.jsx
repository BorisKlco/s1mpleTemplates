/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";

const Card = ({ props }) => {
  const [info, setInfo] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setInfo(true)}
        onMouseLeave={() => setInfo(false)}
        className="videoImg"
        key={props.id}
      >
        <img
          className={info ? "contrast" : ""}
          src={props.images[0].url}
          alt={props.title}
        />
        <p className={info ? "contrast" : ""}>
          {Math.floor(props.duration / 3600)
            ? Math.floor(props.duration / 3600) +
              "h " +
              Math.floor((props.duration % 3600) / 60) +
              "m"
            : Math.floor((props.duration % 3600) / 60) + "m"}
        </p>
      </div>
    </>
  );
};

export default Card;
