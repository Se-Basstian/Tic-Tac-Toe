import { useState, type FC } from "react"
import { Casilla } from "./Casilla"
import clsx from "clsx"
import { ContextTablero } from "../shared/contextTablero"

const Tablero: FC = () => {
  let i = 0
  const [casillasCaracter, setCasillasCaracter] = useState<(number | string)[]>(
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  )
  const [casillasJugadorOne, setCasillasJugadorOne] = useState<number[]>([])
  const [casillasJugadorTwo, setCasillasJugadorTwo] = useState<number[]>([])
  const [ganador, setGanador] = useState<"one" | "two">()

  const handleCasilla = (index: number, jugador: "one" | "two") => {
    const newCasillas: (string | number)[] = casillasCaracter.map(
      (casilla, idx) => {
        if (idx === index) {
          if (jugador === "one") return "X"
          if (jugador === "two") return "O"
        }

        return casilla
      }
    )

    setCasillasCaracter(newCasillas)
  }

  return (
    <ContextTablero.Provider
      value={{
        casillasJugadorOne: {
          valor: casillasJugadorOne,
          setValor: setCasillasJugadorOne,
        },
        casillasJugadorTwo: {
          valor: casillasJugadorTwo,
          setValor: setCasillasJugadorTwo,
        },
      }}
    >
      <div
        className={clsx("grid max-h-[400px] w-full grid-cols-3 gap-3", {
          "bg-white": ganador === "one" || ganador === "two",
        })}
      >
        {casillasCaracter.map((casilla, index) => (
          <Casilla
            key={`casilla-${i++}`}
            index={index}
            color="verde"
            caracter={casilla}
            setCasilla={handleCasilla}
            setGanador={setGanador}
          />
        ))}
      </div>
    </ContextTablero.Provider>
  )
}

export default Tablero
