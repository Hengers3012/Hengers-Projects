"use client";
import React, { useState } from "react";

const MyComponent: React.FC = () => {
  const [resistencia, setResistencia] = useState(0);
  const [bobina, setBobina] = useState(0);
  const [frecuencia, setFrecuencia] = useState(0);
  const [alfa, setAlfa] = useState(0);
  const [theta, setTheta] = useState(0);
  const [beta, setBeta] = useState<number | null>(null);

  const e = 2.718281828459045;
  const startP = 3.14159265358979323846;
  const endP = 2 * 3.14159265358979323846;

  const calculateBeta = () => {
    const resOhm = resistencia;
    const coilH = bobina;
    const freqHz = frecuencia;
    const alfaDeg = alfa;
    const thetaRad = theta;

    const alfaRad = (alfaDeg * Math.PI) / 180.0;
    const thetaRadInput = thetaRad;

    let val1 = 0.0;
    let val2 = 0.0;
    let i = startP;

    while (i <= endP) {
      val1 = Math.sin(i - thetaRadInput);
      const a = Math.sin(alfaRad - thetaRadInput);
      const b = ((resOhm / coilH) * (alfaRad - i)) / (2 * Math.PI * freqHz);
      val2 = a * Math.pow(e, b);

      if (Math.abs(val1 / val2 - 1) < 0.01) {
        setBeta(i);
        return;
      }

      i += 0.000001;
    }

    setBeta(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBeta();
  };

  return (
    <div>
      <h1>Calculadora de Beta</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="resistencia">Resistencia (Ohmios):</label>
        <input
          type="number"
          id="resistencia"
          value={resistencia}
          onChange={(e) => setResistencia(Number(e.target.value))}
        />

        <label htmlFor="bobina">Bobina (Henrys):</label>
        <input
          type="number"
          id="bobina"
          value={bobina}
          onChange={(e) => setBobina(Number(e.target.value))}
        />

        <label htmlFor="frecuencia">Frecuencia (Hertz):</label>
        <input
          type="number"
          id="frecuencia"
          value={frecuencia}
          onChange={(e) => setFrecuencia(Number(e.target.value))}
        />

        <label htmlFor="alfa">Ángulo Alfa (Grados):</label>
        <input
          type="number"
          id="alfa"
          value={alfa}
          onChange={(e) => setAlfa(Number(e.target.value))}
        />

        <label htmlFor="theta">Ángulo Theta (Radianes):</label>
        <input
          type="number"
          id="theta"
          value={theta}
          onChange={(e) => setTheta(Number(e.target.value))}
        />

        <button type="submit">Calcular</button>
      </form>
      {beta !== null && beta !== -1 && (
        <p>El valor de beta es: {beta.toFixed(2)} radianes.</p>
      )}
    </div>
  );
};

export default MyComponent;
