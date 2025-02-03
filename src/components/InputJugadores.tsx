import clsx from "clsx"
import { useContext, useState, type FC } from "react"
import InputText from "./InputText"
import Button from "./Button"
import { DataContext } from "../shared/context"

type Props = {
  setMostrarInputJugadoresToFalse?: (value: boolean) => void
}

const InputJugadores: FC<Props> = ({ setMostrarInputJugadoresToFalse }) => {
  const [inputTextoJugador1, setInputTextoJugador1] = useState("")
  const [inputTextoJugador2, setInputTextoJugador2] = useState("")
  const { jugadores } = useContext(DataContext)

  const handleClickButtonCerrar = () => {
    if (setMostrarInputJugadoresToFalse) {
      setMostrarInputJugadoresToFalse(false)
    }
  }
  const handleClickButtonJugar = () => {
    jugadores.setValor({
      one: inputTextoJugador1,
      two: inputTextoJugador2,
    })
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
        <InputText
          titulo="Jugador 1"
          valorTexto={inputTextoJugador1}
          setValorTexto={setInputTextoJugador1}
        />
        <InputText
          titulo="Jugador 2"
          valorTexto={inputTextoJugador2}
          setValorTexto={setInputTextoJugador2}
        />

        <section className={clsx("flex w-full justify-around")}>
          <Button onClick={handleClickButtonCerrar}>Cerrar</Button>
          <Button color="verde" onClick={handleClickButtonJugar}>
            Jugar
          </Button>
        </section>
      </article>
    </>
  )
}

export default InputJugadores
