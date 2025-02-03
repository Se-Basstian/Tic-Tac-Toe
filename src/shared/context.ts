import { createContext } from "react"

export const DataContext = createContext(
  {} as {
    turno: {
      valor: "one" | "two"
      setValor: (valor: "one" | "two") => void
    }
    jugadores: {
      valor: {
        one: string
        two: string
      }
      setValor: (valor: { one: string; two: string }) => void
    }
  }
)
