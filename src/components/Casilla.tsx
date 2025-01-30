import clsx from "clsx";
import { useContext, useState, type FC } from "react";
import { DataContext } from "../shared/context";

type Props = {
  index: number;
  caracter: string | number;
  setCasilla: (index: number, jugador: "one" | "two") => void;
  color: "amarrillo" | "azul" | "verde";
};
export const Casilla: FC<Props> = ({ caracter, color, index, setCasilla }) => {
  const [colorCasilla, setColorCasilla] = useState(color);
  const [activo, setActivo] = useState(false);

  const { jugador } = useContext(DataContext);

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
    setCasilla(index, jugador.value);
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
