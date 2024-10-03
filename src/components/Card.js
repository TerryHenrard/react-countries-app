import React from "react";

const Card = ({ country }) => {
  const formatNumber = new Intl.NumberFormat("fr-FR", { style: "decimal" })
    .format;

  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau " + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4>{country.capital}</h4>
        <p>Pop. {formatNumber(country.population)}</p>
      </div>
    </li>
  );
};

export default Card;
