import type { FC } from "react"
import Tablero from "../components/Tablero"
import Jugador from "../components/Jugador"
import BarraOpcs from "../components/BarraOpcs"
import clsx from "clsx"

const AreaDeJuegos: FC = () => {
    return (
        <>
            <header
                className={clsx("mt-9 mb-4 flex w-full justify-center px-4")}
            >
                <BarraOpcs turno="Percy" />
            </header>
            <main className="flex w-full justify-center px-4">
                <article className="w-[400px]">
                    <Tablero />
                    <section
                        className={clsx(
                            "mt-4 flex w-full justify-between gap-2 pt-7 text-white",
                            "items-center border-t-2 border-zinc-500 max-[431px]:flex-col"
                        )}
                    >
                        <Jugador nombre="Percy" derecha />
                        <p className="text-2xl font-bold">VS</p>
                        <Jugador izquierda />
                    </section>
                </article>
            </main>
        </>
    )
}

export default AreaDeJuegos
