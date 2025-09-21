import './App.css'
import WeddingInvitation from './components/weddingInvitation'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/invitacion" element={<WeddingInvitation pases={0} />} />
        <Route path="/invitacion/:id" element={<WeddingInvitation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
