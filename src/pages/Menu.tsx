import clsx from "clsx";
import type { FC } from "react";
import { Link } from "react-router";
import Button from "../components/Button";

const Menu: FC = () => {
  return (
    <>
      <main
        className={clsx(
          "max-w-[1010px] h-[100vh] mx-auto px-4",
          "flex justify-center items-center",
        )}
      >
        <article
          className={clsx(
            "h-[400px] w-[350px]",
            "border-4 border-zinc-500 rounded-xl",
          )}
        >
          <header
            className={clsx(
              "h-13 w-full bg-zinc-500 text-white text-3xl font-bold",
              "flex justify-center items-center",
            )}
          >
            Tic Tac Toe
          </header>

          <section
            className={clsx(
              "h-[348px] w-full flex flex-col justify-center items-center gap-10",
            )}
          >
            <Link to={"/area-de-juegos"}>
              <Button>Jugador vs Máquina</Button>
            </Link>

            <Button color="amarrillo">Jugador vc Jugador</Button>
          </section>
        </article>
      </main>
    </>
  );
};

export default Menu;
