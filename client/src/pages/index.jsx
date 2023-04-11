import React from "react";

const Page = () => {
  return (
    <>
      <header>
        <h3 className="pageTitle">Informacion de paises</h3>
      </header>
      <main>
        <select name="selector">
          <option value="">Seleccionar opción</option>
          <option value="value1">Pais</option>
          <option value="value2">Estado</option>
          <option value="value3">Ciudad</option>
        </select>
        <p>Selecciona lo que desees visualizar</p>
        <a href="/countries">Ver paises</a>
        <a href="/estates">Ver Estados</a>
        <a href="/cities">Ver Ciudades</a>
      </main>
    </>
  );
};

export { Page };
