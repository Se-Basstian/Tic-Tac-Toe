import clsx from "clsx"
import { useContext, useState, type FC } from "react"
import { DataContext } from "../shared/context"
import clickCasilla from "../assets/musics/click-casilla.mp3"

type Props = {
  index: number
  caracter: string | number
  setCasilla: (index: number, jugador: "one" | "two") => void
  color: "amarrillo" | "azul" | "verde"
}
export const Casilla: FC<Props> = ({ caracter, color, index, setCasilla }) => {
  const [colorCasilla, setColorCasilla] = useState(color)
  const [activo, setActivo] = useState(false)

  const audioClickCasilla = new Audio(clickCasilla)

  const { turno } = useContext(DataContext)

  const handleButton = () => {
    audioClickCasilla.play()

    if (turno.valor === "one") {
      setColorCasilla("amarrillo")
      turno.setValor("two")
    }
    if (turno.valor === "two") {
      setColorCasilla("azul")
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
          "bg-yellow-400": colorCasilla === "amarrillo",
          "bg-blue-400": colorCasilla === "azul",
          "bg-green-400 hover:scale-95 hover:text-white hover:shadow-md":
            colorCasilla === "verde",
        }
      )}
      onClick={handleButton}
      disabled={activo}
    >
      {caracter}
    </button>
  )
}
