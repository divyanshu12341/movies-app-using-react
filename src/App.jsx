import { Routes,Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home"
function App() {
  return (
    <>
    <Routes>
      <Route path = '/' element = {<Home />} />
    </Routes>
    </>
  )
}

export default App
