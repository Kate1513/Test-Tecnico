import React, { useState } from "react";
import { Link } from "react-router-dom";

const CountriesPage = () => {
  const [countries, setCountries] = useState([]);
  fetch("http://localhost:5007/api/countries/")
    .then((response) => response.json())
    .then((data) => setCountries(data))
    .catch((error) => console.error(error));

  return (
    <>
      <header>
        <h3 className="pageTitle">Lista de paises</h3>
        <a href="/">Volver al inicio</a>
      </header>
      <main>
        <p>Paises</p>
        <ul>
          {countries.map((item) => (
            <li key={item.ID_COUNTRY}>
              <Link to={`/States/${item.ID_COUNTRY}`}>{item.NAME}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export { CountriesPage };
