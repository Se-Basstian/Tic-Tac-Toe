import clsx from "clsx"
import { useContext, useEffect, useState, type FC } from "react"
import { DataContext } from "../shared/context"
import clickCasilla from "../assets/musics/click-casilla.mp3"
import { ContextTablero } from "../shared/contextTablero"
import { aGanado } from "../utils/comprobarGanador"

type Props = {
  index: number
  caracter: string | number
  setCasilla: (index: number, jugador: "one" | "two") => void
  // color: "amarrillo" | "azul" | "verde"
  setGanador: (valor: "one" | "two") => void
}
export const Casilla: FC<Props> = ({
  caracter,
  index,
  setCasilla,
  setGanador,
}) => {
  // const [colorCasilla, setColorCasilla] = useState(color)
  const [activo, setActivo] = useState(false)
  const { casillasJugadorOne, casillasJugadorTwo } = useContext(ContextTablero)

  const audioClickCasilla = new Audio(clickCasilla)

  const { turno } = useContext(DataContext)

  useEffect(() => {
    if (aGanado(casillasJugadorOne.valor)) {
      setGanador("one")
    }

    if (aGanado(casillasJugadorTwo.valor)) {
      setGanador("two")
    }
  })

  const handleButton = () => {
    if (caracter === "O" || caracter === "X") {
      return
    }
    audioClickCasilla.play()

    if (turno.valor === "one") {
      const newCasillaJugadorOne = [
        ...casillasJugadorOne.valor,
        Number(caracter),
      ]

      casillasJugadorOne.setValor(newCasillaJugadorOne)

      // setColorCasilla("amarrillo")
      turno.setValor("two")
    }

    if (turno.valor === "two") {
      const newCasillaJugadorTwo = [
        ...casillasJugadorTwo.valor,
        Number(caracter),
      ]

      casillasJugadorTwo.setValor(newCasillaJugadorTwo)

      // setColorCasilla("azul")
      turno.setValor("one")
    }

    setActivo(true)
    setCasilla(index, turno.valor)
  }

  return (
    <button
      type="button"
      className={clsx(
        "w-ful aspect-square rounded-xl text-4xl font-bold",
        "shadow-white",
        {
          "bg-yellow-400": caracter === "X",
          "bg-blue-400": caracter === "O",
          "bg-green-400 hover:scale-95 hover:text-white hover:shadow-md":
            caracter !== "X" && caracter !== "O",
        }
      )}
      onClick={handleButton}
      disabled={activo}
    >
      {caracter}
    </button>
  )
}
