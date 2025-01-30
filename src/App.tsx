import Tablero from "./components/Tablero";
import Jugador from "./components/Jugador";
import Menu from "./components/Menu";
import clsx from "clsx";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
