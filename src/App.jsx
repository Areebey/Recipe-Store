import { BrowserRouter, Routes,Route } from "react-router-dom"
import Navbar from "./Components/Navbar/navbar"
import Card from "./Components/Cards/card"
import './App.css'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Card/>
    <Routes>
      <Route/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App