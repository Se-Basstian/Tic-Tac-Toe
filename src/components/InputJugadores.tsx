import clsx from "clsx"
import type { FC } from "react"
import InputText from "./InputText"
import Button from "./Button"

type Props = {
  setMostrarInputJugadoresToFalse?: (value: boolean) => void
}

const InputJugadores: FC<Props> = ({ setMostrarInputJugadoresToFalse }) => {
  const handleClickButtonCerrar = () => {
    if (setMostrarInputJugadoresToFalse) {
      setMostrarInputJugadoresToFalse(false)
    }
  }

  return (
    <>
      <div
        className={clsx("absolute top-0 h-full w-full bg-[rgb(0,0,0,0.6)]")}
      />

      <article
        className={clsx(
          "absolute top-1/2 left-1/2 h-[350px] w-[300px]",
          "-translate-x-1/2 -translate-y-1/2",
          "rounded-xl border-2 border-zinc-400",
          "bg-zinc-600 p-2",
          "flex flex-col items-center justify-evenly gap-7"
        )}
      >
        <InputText titulo="Jugador 1" />
        <InputText titulo="Jugador 2" />

        <section className={clsx("flex w-full justify-around")}>
          <Button onClick={handleClickButtonCerrar}>Cerrar</Button>
          <Button
            color="verde"
            onClick={() => {
              console.log("holad")
            }}
          >
            {" "}
            Jugar
          </Button>
        </section>
      </article>
    </>
  )
}

export default InputJugadores
