import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Buttons from "./pages/Buttons"
import Menus from "./pages/menues/Menus"
import Stars from "./pages/Stars"
import Badges from "./pages/Badges"
import Banners from "./pages/Banners"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="buttons" element={<Buttons />} />
          <Route path="menus" element={<Menus />} />
          <Route path="stars" element={<Stars />} />
          <Route path="badges" element={<Badges />} />
          <Route path="Banners" element={<Banners />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
