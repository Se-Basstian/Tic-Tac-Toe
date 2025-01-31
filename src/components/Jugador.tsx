import clsx from "clsx";
import type { FC } from "react";

type Props = {
  nombre?: string;
  derecha?: boolean;
  izquierda?: boolean;
};
const Jugador: FC<Props> = ({
  nombre = "Computadora",
  derecha = false,
  izquierda = false,
}) => {
  return (
    <div
      className={clsx(
        "w-[170px] border-2 border-zinc-600 rounded-lg",
        "py-1 px-2  ",
        {
          "max-[431px]:self-end": izquierda,
          "max-[431px]:self-start": derecha,
        },
      )}
    >
      <h4 className="uppercase font-bold">Jugador</h4>
      <p className="w-full p-1 bg-zinc-600 mt-1">{nombre}</p>
    </div>
  );
};

export default Jugador;
