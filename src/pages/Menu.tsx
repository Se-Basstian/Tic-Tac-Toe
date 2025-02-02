import clsx from "clsx"
import { useState, type FC } from "react"
import Button from "../components/Button"
import InputJugadores from "../components/InputJugadores"

const Menu: FC = () => {
  const [mostrarInputJugadores, setMostrarInputJugadores] = useState(false)

  const handleClickButton = () => {
    setMostrarInputJugadores(true)
  }

  return (
    <>
      <main
        className={clsx(
          "mx-auto h-[100vh] max-w-[1010px] px-4",
          "flex items-center justify-center"
        )}
      >
        <article
          className={clsx(
            "h-[400px] w-[350px]",
            "rounded-xl border-4 border-zinc-500"
          )}
        >
          <header
            className={clsx(
              "h-13 w-full bg-zinc-500 text-3xl font-bold text-white",
              "flex items-center justify-center"
            )}
          >
            Tic Tac Toe
          </header>

          <section
            className={clsx(
              "flex h-[348px] w-full flex-col items-center justify-center gap-10"
            )}
          >
            <Button>Jugador vs Máquina</Button>

            <Button color="amarrillo" onClick={handleClickButton}>
              Jugador vc Jugador
            </Button>
          </section>
        </article>
      </main>
      {mostrarInputJugadores && (
        <InputJugadores
          setMostrarInputJugadoresToFalse={setMostrarInputJugadores}
        />
      )}
    </>
  )
}

export default Menu
