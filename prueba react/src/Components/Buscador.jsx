import React from "react";

const Buscador = ({ busqueda, setBusqueda }) => {
  return (
    <input
      id="buscador"
      type="text"
      placeholder="Type your city or team"
      className="form-control"
      value={busqueda}
      onChange={(e) => {
        setBusqueda(e.target.value);
      }}
    />
  );
};

export default Buscador;
