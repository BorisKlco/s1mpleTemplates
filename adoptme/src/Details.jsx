import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ErrorBoundary from "./Error";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading">
        <h2>🍥</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="search">
      <h2>{pet.name}</h2>
      <p>
        {pet.animal} - {pet.breed}
      </p>
      <p>{pet.description}</p>
      <p>
        {pet.city} - {pet.state}
      </p>
      <button>Adopt {pet.name}</button>
      {pet.images.map((img) => (
        <img src={img} key={img} alt={pet.name} />
      ))}
    </div>
  );
};

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
