// @/components/imc
"use client";

import React from "react";

export default function IMC() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [imc, setImc] = React.useState("");

  function handleClick() {
    const alturaMetro = Number(altura) / 100;
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);
    setImc(total);
  }

  return (
    <div>
      <div className="container">
        <label htmlFor="peso">
          Peso <span>(em kg)</span>
        </label>
        <input
          type="text"
          id="peso"
          name="peso"
          onChange={(e) => setPeso(e.target.value)}
        />
        <label htmlFor="peso">
          Altura <span>(em cm)</span>
        </label>
        <input
          type="text"
          id="altura"
          name="altura"
          onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={handleClick}>Calcular</button>
        <p>IMC: {imc}</p>
      </div>
    </div>
  );
}
