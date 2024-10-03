import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const continents = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(({ data }) => setData(data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          value={rangeValue}
          onChange={({ target: { value } }) => setRangeValue(value)}
        />
        {continents.map((continent) => (
          <li key={continent}>
            <input
              type="radio"
              id={continent}
              name="continent"
              checked={continent === selectedRadio}
              onChange={({ target: { id } }) => setSelectedRadio(id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>
          Annuler la recherche
        </button>
      )}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .slice(0, rangeValue)
          .sort(({ population: a }, { population: b }) => b - a)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
