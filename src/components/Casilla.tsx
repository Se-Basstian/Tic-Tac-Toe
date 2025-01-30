import clsx from "clsx";
import { useState, type FC } from "react";

type Props = {
  index: number;
  caracter: string | number;
  color: "amarrillo" | "azul" | "verde";
  jugador: {
    value: "one" | "two";
    setValue: (value: "one" | "two") => void;
  };
};
export const Casilla: FC<Props> = ({ caracter, color, index, jugador }) => {
  const [colorCasilla, setColorCasilla] = useState(color);
  const [activo, setActivo] = useState(false);

  const handleButton = () => {
    if (jugador.value === "one") {
      setColorCasilla("amarrillo");
      jugador.setValue("two");
    }
    if (jugador.value === "two") {
      setColorCasilla("azul");
      jugador.setValue("one");
    }

    setActivo(true);
    console.log(index);
  };

  return (
    <button
      type="button"
      className={clsx("h-full w-full text-4xl font-bold rounded-xl ", {
        "bg-yellow-400": colorCasilla === "amarrillo",
        "bg-blue-400": colorCasilla === "azul",
        "bg-green-400": colorCasilla === "verde",
      })}
      onClick={handleButton}
      disabled={activo}
    >
      {caracter}
    </button>
  );
};
