import clsx from "clsx"
import { useContext, useEffect, useState, type FC } from "react"
import InputText from "./InputText"
import Button from "./Button"
import { DataContext } from "../shared/context"
import { useNavigate } from "react-router"

type Props = {
  setMostrarInputJugadoresToFalse?: (value: boolean) => void
  nombreJugadorOne?: string
  nombreJudadorTwo?: string
}

const InputJugadores: FC<Props> = ({
  setMostrarInputJugadoresToFalse,
  nombreJugadorOne = "",
  nombreJudadorTwo = "",
}) => {
  const [inputTextoJugador1, setInputTextoJugador1] = useState("")
  const [inputTextoJugador2, setInputTextoJugador2] = useState("")
  const { jugadores } = useContext(DataContext)
  const navigate = useNavigate()

  useEffect(() => {
    setInputTextoJugador1(nombreJugadorOne)
    setInputTextoJugador2(nombreJudadorTwo)
  }, [nombreJugadorOne, nombreJudadorTwo])

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

    if (inputTextoJugador1 === "" || inputTextoJugador2 === "") {
      alert("Debes llenar los campos de jugadores")
    } else {
      navigate("/area-de-juegos")
    }
  }

  return (
    <>
      <div
        className={clsx("absolute top-0 h-full w-full bg-[rgb(0,0,0,0.6)]")}
      />

      <article
        className={clsx(
          "absolute top-1/2 left-1/2 h-[350px] w-[300px] max-[330px]:w-[250px]",
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
