const fetchEvents = async () => {
  const options = {
    headers: {
      Authorization:
        "Bearer 5650cee3635cc2dcfc971562ae512ea92ab476aea6de3e71a8888198225b5b3a",
      "Content-Type": "application/json",
    },
  };
  const apiRes = await fetch(
    "https://api.pokergo.com/v2/properties/1dfb3940-7d53-4980-b0b0-f28b369a000d/collections/30d0b34d-7bdb-4202-99f3-bfee423c1b9a?include=entities",
    options
  );

  return apiRes.json();
};

export default fetchEvents;
