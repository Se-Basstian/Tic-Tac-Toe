import { Route, Routes } from "react-router"
import Menu from "./pages/Menu"
import AreaDeJuegos from "./pages/AreaDeJugos"
import { DataContext } from "./shared/context"
import { useState } from "react"

function App() {
  const [jugador, setJugador] = useState<["one" | "two", string?]>(["one"])

  return (
    <DataContext.Provider
      value={{
        jugador: {
          value: jugador,
          setValue: setJugador,
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
