import { createContext } from "react"

export const ContextTablero = createContext(
  {} as {
    casillasJugadorOne: {
      valor: number[]
      setValor: (valor: number[]) => void
    }
    casillasJugadorTwo: {
      valor: number[]
      setValor: (valor: number[]) => void
    }
    casillasTablero: {
      valor: (number | string)[]
      setValor: (valor: (number | string)[]) => void
    }
  }
)
