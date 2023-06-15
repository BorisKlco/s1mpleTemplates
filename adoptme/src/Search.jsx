import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Result from "./Result";
import fetchSearch from "./fetchSearch";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const Search = () => {
  const [reqParams, setReqParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", reqParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <>
      <div className="search-params">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const obj = {
              animal: formData.get("animal") ?? "",
              location: formData.get("location") ?? "",
              breed: formData.get("breed") ?? "",
            };
            setReqParams(obj);
          }}
        >
          <label htmlFor="location">
            Location
            <input id="location" name="location" placeholder="Location" />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              onChange={(e) => {
                setAnimal(e.target.value);
              }}
              id="animal"
              name="animal"
            >
              <option />
              {ANIMALS.map((animal) => (
                <option key={animal}>{animal}</option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select id="breed" name="breed" disabled={breeds.length === 0}>
              <option />
              {breeds.map((breed) => (
                <option key={breed}>{breed}</option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
      <Result pets={pets} />
    </>
  );
};

export default Search;
