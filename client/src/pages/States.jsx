import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StatesPage = () => {
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const { slug } = useParams();

  fetch("http://localhost:5007/api/countries/")
    .then((response) => response.json())
    .then((data) => setCountries(data))
    .catch((error) => console.error(error));

  const country = countries.filter(
    (country) => country.ID_COUNTRY === Number(slug)
  );
  setStates(country);

  return (
    <>
      <header>
        <h3 className="pageTitle">Lista de Estados</h3>
        <a href="/">Volver al inicio</a>
      </header>
      <main>
        <p>Estados</p>
        <ul>
          {states.STATES.map((item) => (
            <li key={item.ID_STATE}>
              <a href={`/Cities/${item.ID_STATE}`}>{item.NAME}</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export { StatesPage };
