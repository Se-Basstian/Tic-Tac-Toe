import Tablero from "./components/Tablero";
import Jugador from "./components/Jugador";
import Menu from "./components/Menu";
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
      <header className={clsx("w-full flex justify-center mt-9 mb-4")}>
        <Menu turno="Percy" />
      </header>
      <main className="w-full flex justify-center">
        <article className="w-[400px]">
          <Tablero />
          <section
            className={clsx(
              "w-full flex justify-between text-white mt-4 pt-7",
              "border-t-2 border-zinc-500 items-center",
            )}
          >
            <Jugador nombre="Percy" />
            <p className="font-bold text-2xl">VS</p>
            <Jugador />
          </section>
        </article>
      </main>
    </DataContext.Provider>
  );
}

export default App;
