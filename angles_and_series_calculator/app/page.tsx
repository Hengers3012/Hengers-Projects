"use client";
import React, { useState } from "react";

const e = 2.718281828459045;
const startP = 3.14159265358979323846;
const endP = 2 * 3.14159265358979323846;

const ControladorBidireccionalCA: React.FC = () => {
  const [alfa, setAlfa] = useState(0);
  const [theta, setTheta] = useState(0);
  const [res, setRes] = useState(0);
  const [coil, setCoil] = useState(0);
  const [freq, setFreq] = useState(0);
  const [beta, setBeta] = useState(0);

  const calcularBeta = () => {
    const alfaRad = (alfa * 3.14159265358979323846) / 180.0;
    const thetaRad = (theta * 3.14159265358979323846) / 180.0;

    let val1 = 0.0;
    let val2 = 0.0;
    let a = 0.0;
    let b = 0.0;

    let i = startP;

    do {
      val1 = Math.sin(i - thetaRad);
      a = Math.sin(alfaRad - thetaRad);
      b = ((res / coil) * (alfaRad - i)) / (2 * startP * freq);
      val2 = a * Math.pow(e, b);

      if (val1 / val2 > 0.99 && val1 / val2 < 1.01) {
        setBeta(i);
        return;
      }

      i += 0.000001;
    } while (i <= endP);

    setBeta(-1);
  };

  return (
    <div className="bg-white text-black h-screen">
      <div>
        <div>
          <h3>Resistencia:</h3>
          <input
            type="number"
            value={res}
            onChange={(e) => setRes(Number(e.target.value))}
            placeholder="Introduce the resistance value in ohms"
          />
        </div>
        <div>
          <h3>Bobina:</h3>
          <input
            type="number"
            value={coil}
            onChange={(e) => setCoil(Number(e.target.value))}
            placeholder="Introduce the inductance value in henrys"
          />
        </div>
        <div>
          <h3>Frecuancia:</h3>
          <input
            type="number"
            value={freq}
            onChange={(e) => setFreq(Number(e.target.value))}
            placeholder="Introduce the frequency value in hertz"
          />
        </div>
        <div>
          <h3>Alfa:</h3>
          <input
            type="number"
            value={alfa}
            onChange={(e) => setAlfa(Number(e.target.value))}
            placeholder="Introduce alfa angle in degrees"
          />
        </div>
        <div>
          <h3>Theta:</h3>
          <input
            type="number"
            value={theta}
            onChange={(e) => setTheta(Number(e.target.value))}
            placeholder="Introduce theta (tan^-1 WL/R) angle in degrees"
          />
        </div>
      </div>
      <button onClick={calcularBeta}>Calcular Beta</button>

      {beta !== 0 && (
        <div>
          {beta === -1 ? (
            <p>Not Found.</p>
          ) : (
            <p>Found. The value of beta is: {beta}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ControladorBidireccionalCA;
