import { Routes, Route} from "react-router"
import {Header} from "./common/components/Header/Header"
import {HomePage} from "./pages/HomePage/HomePage"
import {CharactersPage} from "./pages/CharactersPage/CharactersPage"
import {Character} from "./pages/CharactersPage/Charecter/Charecter"
import {EpisodePage} from "./pages/EpisodePage/EpisodePage"
import {LocationsPage} from "./pages/LocationsPage/LocationsPage"
import './App.css'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route  path="/" element={<HomePage />}/>
        <Route  path="/characters" element={<CharactersPage />}/>
        <Route  path="/characters/:id" element={<Character />}/>
        <Route  path="/episodes" element={<EpisodePage />}/>
        <Route  path="/locations" element={<LocationsPage />}/>
      </Routes>
    </div>
  )
}

export default App
