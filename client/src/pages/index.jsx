import React from "react";

const Page = () => {
  return (
    <>
      <header>
        <h3 className="pageTitle">Informacion de paises</h3>
      </header>
      <main>
        <p>Selecciona lo que desees visualizar</p>
        <a href="/countries">Ver paises</a>
        <a href="/estates">Ver Estados</a>
        <a href="/cities">Ver Ciudades</a>
      </main>
    </>
  );
};

export { Page };
