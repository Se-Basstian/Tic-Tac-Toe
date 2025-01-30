import { useState, type FC } from "react";
import { Casilla } from "./Casilla";

const Tablero: FC = () => {
  let i = 0;
  const [jugador, setJugador] = useState<"one" | "two">("one");
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
    <div className="w-full h-[400px] grid grid-cols-3 gap-3">
      {casillasCaracter.map((casilla, index) => (
        <Casilla
          key={`casilla-${i++}`}
          index={index}
          color="verde"
          caracter={casilla}
          jugador={{
            value: jugador,
            setValue: setJugador,
          }}
          setCasilla={handleCasilla}
        />
      ))}
    </div>
  );
};

export default Tablero;
