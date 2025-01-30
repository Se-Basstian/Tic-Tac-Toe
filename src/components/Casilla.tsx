import clsx from "clsx";
import { useState, type FC } from "react";

type Props = {
  contenido: string;
};
const Casilla: FC<Props> = ({ contenido }) => {
  const [rotar, setRotar] = useState(false);
  const [color, setColor] = useState<"amarrillo" | "azul">();
  const [activo, setActivo] = useState(false);

  const handleClick = () => {
    setRotar(!rotar);
    setTimeout(() => {
      setColor("amarrillo");
      setActivo(true);
    }, 800);
  };

  return (
    <button
      type="button"
      className={clsx(
        "w-full h-full bg-teal-300 text-black font-bold text-6xl",
        "flex justify-center items-center rounded-2xl",
        "transition duration-75 ease-in",
        {
          "animate-rotacion-casilla": rotar,
          "bg-yellow-200": color === "amarrillo",
          "hover:scale-110": !activo,
        },
      )}
      onClick={handleClick}
      disabled={activo}
    >
      {contenido}
    </button>
  );
};

export default Casilla;
