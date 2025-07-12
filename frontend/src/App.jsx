import { Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom"
import Homepage from "./pages/Home"
import Hero from "./components/Hero"
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </div>
  )
}

export default App
