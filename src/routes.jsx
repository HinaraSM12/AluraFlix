
import PaginaBase from "./pages/PaginaBase";
import Inicio from "./pages/Inicio";
import NuevoVideo from "./pages/NuevoVideo";
import NotFound from "./pages/NotFound";
import Player from "./pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NuevaCategoria from "./pages/NuevaCategoria";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="nuevo-video" element={<NuevoVideo />}></Route>
          <Route path="nueva-categoria" element={<NuevaCategoria />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;