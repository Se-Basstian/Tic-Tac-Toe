import type { FC } from "react";
import Casilla from "./Casilla";
import clsx from "clsx";

const Tablero: FC = () => {
  let i = 0;
  const indices = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className={clsx("w-[400px] h-[400px] grid grid-cols-3 gap-4")}>
      {indices.map((indice) => (
        <Casilla key={i++} contenido={indice.toString()} />
      ))}
    </div>
  );
};

export default Tablero;
