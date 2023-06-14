import { useState } from "react";
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const Search = () => {
    const [location, setLocation] = useState();
    const [animal, setAnimal] = useState();
    const [breed, setBreed] = useState();
    const breeds = [1]

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                        onChange={e => setLocation(e.target.value)} 
                        id="location" value={location} 
                        placeholder="Location" 
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select 
                        onChange={e => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }} 
                        id="animal" 
                        value={animal}
                    >
                        <option />
                        {ANIMALS.map( animal => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select 
                        disabled = {breeds.length === 0}
                        onChange={e => setBreed(e.target.value)} 
                        id="breed" 
                        value={breed}
                    >
                        <option />
                        {breeds.map( breed => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Search