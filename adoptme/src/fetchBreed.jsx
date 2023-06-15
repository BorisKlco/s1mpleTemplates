const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const apiRes = await fetch(
    `https://pets-v2.dev-apis.com/breed?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} not ok`);
  }

  return apiRes.json();
};

export default fetchBreedList;
