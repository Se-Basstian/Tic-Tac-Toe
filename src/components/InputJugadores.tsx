import clsx from "clsx";
import type { FC } from "react";
import InputText from "./InputText";
import Button from "./Button";

const InputJugadores: FC = () => {
  return (
    <>
      <div
        className={clsx("absolute top-0 w-full h-full bg-[rgb(0,0,0,0.6)]")}
      />

      <article
        className={clsx(
          "h-[350px] w-[300px] absolute top-1/2 left-1/2",
          "-translate-x-1/2 -translate-y-1/2",
          "border-2 border-zinc-400 rounded-xl",
          "bg-zinc-600 p-2",
          "flex flex-col gap-7 justify-evenly items-center",
        )}
      >
        <InputText titulo="Jugador 1" />
        <InputText titulo="Jugador 2" />

        <section className={clsx("w-full flex justify-around")}>
          <Button>Cerrar</Button>
          <Button color="verde"> Jugar</Button>
        </section>
      </article>
    </>
  );
};

export default InputJugadores;
