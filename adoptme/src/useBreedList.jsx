import { useEffect, useState } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("not loaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      reqBreedList(animal);
    }

    async function reqBreedList(animal) {
      setBreedList([]);
      setStatus("Loading...");

      const res = await fetch(
        `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );

      const json = await res.json();

      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("Loaded");
    }
  }, [animal]);

  return [breedList, status]
}
