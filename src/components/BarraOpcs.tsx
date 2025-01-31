import clsx from "clsx";
import type { FC } from "react";
import imgReiniciar from "../assets/images/replay.png";

type Props = {
  turno: string;
};
const BarraOpcs: FC<Props> = ({ turno }) => {
  return (
    <article
      className={clsx(
        "w-[400px] flex justify-between",
        "border-b-2 border-zinc-500 pb-2",
      )}
    >
      <section className="flex">
        <p className="text-yellow-300 text-3xl font-bold">X</p>
        <p className="text-blue-300 text-3xl font-bold">O</p>
      </section>
      <section
        className={clsx(
          "flex gap-2 py-1 px-2 rounded-lg border-2 border-zinc-400",
          "h-fit",
        )}
      >
        <p className="text-white font-bold uppercase">Turno</p>
        <p className="w-fit bg-zinc-500 text-white ps-1 pe-6">{turno}</p>
      </section>

      <button
        className={clsx("w-fit h-fit bg-purple-600 rounded-lg p-2")}
        type="button"
      >
        <img
          className="w-6 h-6 hover:rotate-180 transition duration-500 ease-out"
          src={imgReiniciar}
          alt="Botón reiniciar"
        />
      </button>
    </article>
  );
};

export default BarraOpcs;
