import { Routes, Route} from "react-router"
import {Header} from "./common/components/Header/Header"
import {HomePage} from "./pages/HomePage/HomePage"
import {CharacterPage} from "./pages/CharacterPage/CharacterPage"
import {EpisodePage} from "./pages/EpisodePage/EpisodePage"
import {LocationsPage} from "./pages/LocationsPage/LocationsPage"
import './App.css'
// import { NavLink } from "react-router"

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route  path="/" element={<HomePage />}/>
        <Route  path="/characters" element={<CharacterPage />}/>
        <Route  path="/episodes" element={<EpisodePage />}/>
        <Route  path="/locations" element={<LocationsPage />}/>
      </Routes>
    </div>
  )
}

export default App
