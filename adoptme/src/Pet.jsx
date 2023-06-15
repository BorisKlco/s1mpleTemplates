const Pet = (prop) => {
  return (
    <div>
      <h3>{prop.name}</h3>
      <p>
        {prop.animal} - {prop.breed}
      </p>
      <p>{prop.location}</p>
      {/*       {prop.images.map((img) => (
        <img src={img} key={img} alt={img} />
      ))} */}
      <img src={prop.images[0]} key={prop.images[0]} alt={prop.images[0]} />
    </div>
  );
};

export default Pet;
