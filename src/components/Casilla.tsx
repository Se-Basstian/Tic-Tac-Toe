import clsx from "clsx"
import { useContext, useState, type FC } from "react"
import { DataContext } from "../shared/context"

type Props = {
  index: number
  caracter: string | number
  setCasilla: (index: number, jugador: "one" | "two") => void
  color: "amarrillo" | "azul" | "verde"
}
export const Casilla: FC<Props> = ({ caracter, color, index, setCasilla }) => {
  const [colorCasilla, setColorCasilla] = useState(color)
  const [activo, setActivo] = useState(false)

  const { turno } = useContext(DataContext)

  const handleButton = () => {
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
      className={clsx("w-ful aspect-square rounded-xl text-4xl font-bold", {
        "bg-yellow-400": colorCasilla === "amarrillo",
        "bg-blue-400": colorCasilla === "azul",
        "bg-green-400": colorCasilla === "verde",
      })}
      onClick={handleButton}
      disabled={activo}
    >
      {caracter}
    </button>
  )
}
