import { Link } from "react-router-dom";

const Pet = (prop) => {
  return (
    <div>
      <h3>{prop.name}</h3>
      <p>
        {prop.animal} - {prop.breed}
      </p>
      <p>{prop.location}</p>
      <Link to={`/details/${prop.id}`}>
        <img src={prop.images[0]} key={prop.images[0]} alt={prop.images[0]} />
      </Link>
    </div>
  );
};

export default Pet;
