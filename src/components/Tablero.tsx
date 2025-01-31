import { useState, type FC } from "react";
import { Casilla } from "./Casilla";
import clsx from "clsx";

const Tablero: FC = () => {
  let i = 0;
  const [casillasCaracter, setCasillasCaracter] = useState<(number | string)[]>(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  );

  const handleCasilla = (index: number, jugador: "one" | "two") => {
    const newCasillas: (string | number)[] = casillasCaracter.map(
      (casilla, idx) => {
        if (idx === index) {
          if (jugador === "one") return "X";
          if (jugador === "two") return "O";
        }

        return casilla;
      },
    );

    setCasillasCaracter(newCasillas);
  };

  return (
    <div className={clsx("w-full max-h-[400px] grid grid-cols-3 gap-3")}>
      {casillasCaracter.map((casilla, index) => (
        <Casilla
          key={`casilla-${i++}`}
          index={index}
          color="verde"
          caracter={casilla}
          setCasilla={handleCasilla}
        />
      ))}
    </div>
  );
};

export default Tablero;
