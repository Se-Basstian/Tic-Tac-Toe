import { Route, Routes } from "react-router";
import Menu from "./pages/Menu";
import AreaDeJuegos from "./pages/AreaDeJugos";

function App() {
  return (
    <Routes>
      <Route index element={<Menu />} />
      <Route path="/area-de-juegos" element={<AreaDeJuegos />} />
    </Routes>
  );
}

export default App;
