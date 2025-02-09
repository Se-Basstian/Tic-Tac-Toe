import { useContext, useEffect, useState, type FC } from "react"
import { Casilla } from "./Casilla"
import clsx from "clsx"
import { ContextTablero } from "../shared/contextTablero"
import VentanaGanador from "./VentanaGanador"
import { DataContext } from "../shared/context"
import { valorDeArregloNoRepetido } from "../utils/respuestaMaquina"

const Tablero: FC = () => {
  let i = 0
  const [casillasCaracter, setCasillasCaracter] = useState<(number | string)[]>(
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  )
  const [casillasJugadorOne, setCasillasJugadorOne] = useState<number[]>([])
  const [casillasJugadorTwo, setCasillasJugadorTwo] = useState<number[]>([])
  const [ganador, setGanador] = useState<"one" | "two">()
  const { jugadores, turno } = useContext(DataContext)

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

  useEffect(() => {
    setTimeout(() => {
      if (jugadores.valor.two === "Máquina" && turno.valor === "two") {
        const indiceACambiar = valorDeArregloNoRepetido(casillasCaracter)

        const newCasillas: (string | number)[] = casillasCaracter.map(
          (casilla, idx) => {
            if (idx === indiceACambiar) {
              return "O"
            }

            return casilla
          }
        )

        setCasillasCaracter(newCasillas)
        turno.setValor("one")
      }
    }, 500)
  }, [jugadores.valor, turno, casillasCaracter])

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
        casillasTablero: {
          valor: casillasCaracter,
          setValor: setCasillasCaracter,
        },
      }}
    >
      <div className={clsx("grid max-h-[400px] w-full grid-cols-3 gap-3")}>
        {casillasCaracter.map((casilla, index) => (
          <Casilla
            key={`casilla-${i++}`}
            index={index}
            caracter={casilla}
            setCasilla={handleCasilla}
            setGanador={setGanador}
          />
        ))}
      </div>
      {(ganador === "one" || ganador === "two") && (
        <VentanaGanador nombreGanador={jugadores.valor[ganador]} />
      )}
    </ContextTablero.Provider>
  )
}

export default Tablero
