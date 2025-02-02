import { createContext } from "react"

export const DataContext = createContext(
  {} as {
    jugador: {
      value: [numero: "one" | "two", nombre?: string]
      setValue: (value: [numero: "one" | "two", nombre?: string]) => void
    }
  }
)
