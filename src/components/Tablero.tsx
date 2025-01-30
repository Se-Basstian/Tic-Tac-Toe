import { useState, type FC } from "react";
import { Casilla } from "./Casilla";

const Tablero: FC = () => {
  let i = 0;
  const [jugador, setJugador] = useState<"one" | "two">("one");
  const [casillasCaracter] = useState<(number | string)[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);

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
        />
      ))}
    </div>
  );
};

export default Tablero;
