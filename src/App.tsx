import { Route, Routes } from "react-router"
import Menu from "./pages/Menu"
import AreaDeJuegos from "./pages/AreaDeJugos"
import { DataContext } from "./shared/context"
import { useState } from "react"

function App() {
  const [turno, setTurno] = useState<"one" | "two">("one")
  const [jugadores, setJugadores] = useState<{ one: string; two: string }>({
    one: "",
    two: "",
  })

  return (
    <DataContext.Provider
      value={{
        turno: {
          valor: turno,
          setValor: setTurno,
        },
        jugadores: {
          valor: jugadores,
          setValor: setJugadores,
        },
      }}
    >
      <Routes>
        <Route index element={<Menu />} />
        <Route path="/area-de-juegos" element={<AreaDeJuegos />} />
      </Routes>
    </DataContext.Provider>
  )
}

export default App
