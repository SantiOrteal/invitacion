import './App.css'
import WeddingInvitation from './components/weddingInvitation'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         {/* Ruta principal: invitación sin pases o con query param ?id= */}
        <Route path="/invitacion" element={<WeddingInvitation />} />

        {/* Cualquier otra ruta redirige al inicio */}
        <Route path="*" element={<Navigate to="/invitacion" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
