import React from "react";

interface HalfWaveRectifierProps {
  resistance: number;
  frequency: number;
  coil: number;
}

const HalfWaveRectifier: React.FC<HalfWaveRectifierProps> = ({
  resistance,
  frequency,
  coil,
}) => {
  const calculateBeta = (): number | null => {
    const startP: number = Math.PI;
    const endP: number = 2 * Math.PI;
    let val1: number = 0.0;
    let val2: number = 0.0;
    let i: number = startP;

    while (i <= endP) {
      val1 = Math.sin(i - theta);
      const a: number = Math.sin(alfa - theta);
      const b: number =
        ((resistance / coil) * (alfa - i)) / (2 * startP * frequency);
      val2 = a * Math.exp(b);

      if (val1 / val2 > 0.99 && val1 / val2 < 1.01) {
        return i;
      }

      i += 0.000001;
    }

    return null;
  };

  const beta: number | null = calculateBeta();

  return (
    <div>
      <p>Beta value: {beta}</p>
    </div>
  );
};

export default HalfWaveRectifier;
