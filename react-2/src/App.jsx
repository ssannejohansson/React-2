
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router"
import API from "./components/API.jsx"
import LoginRegistration from "./components/LoginRegistration.jsx"

function App() {

  return (
<BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginRegistration/>} />
            <Route path="/api" element={<API/>} />
            </Routes>
            </BrowserRouter>
  )
}

export default App
