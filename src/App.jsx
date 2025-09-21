import './App.css'
import WeddingInvitation from './components/weddingInvitation'
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path="/invitacion" element={<WeddingInvitation pases={0} />} />
        <Route path="/invitacion/:id" element={<WeddingInvitation />} />
      </Routes>
    </HashRouter>
  )
}

export default App
