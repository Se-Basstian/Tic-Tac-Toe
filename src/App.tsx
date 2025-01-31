import Tablero from "./components/Tablero";
import Jugador from "./components/Jugador";
import BarraOpcs from "./components/BarraOpcs";
import clsx from "clsx";
import { DataContext } from "./shared/context";
import { useState } from "react";

function App() {
  const [jugador, setJugador] = useState<"one" | "two">("one");

  return (
    <DataContext.Provider
      value={{
        jugador: {
          value: jugador,
          setValue: setJugador,
        },
      }}
    >
      <header className={clsx("w-full flex justify-center mt-9 mb-4 px-4")}>
        <BarraOpcs turno="Percy" />
      </header>
      <main className="w-full flex justify-center px-4">
        <article className="w-[400px]">
          <Tablero />
          <section
            className={clsx(
              "w-full flex gap-2 justify-between text-white mt-4 pt-7",
              "border-t-2 border-zinc-500 items-center max-[431px]:flex-col",
            )}
          >
            <Jugador nombre="Percy" derecha />
            <p className="font-bold text-2xl">VS</p>
            <Jugador izquierda />
          </section>
        </article>
      </main>
    </DataContext.Provider>
  );
}

export default App;
