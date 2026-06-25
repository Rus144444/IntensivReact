import { Routes, Route} from "react-router"
import { Header } from "./common/components/Header/Header"
import { HomePage } from "./pages/HomePage/HomePage"
import { CharactersPage } from "./pages/CharactersPage/CharactersPage"
import { Character} from "./pages/CharactersPage/Charecter/Charecter"
import { EpisodePage} from "./pages/EpisodePage/EpisodePage"
import { Episode } from "./pages/EpisodePage/Episode/Episode"
import { LocationsPage } from "./pages/LocationsPage/LocationsPage"
import { Location } from "./pages/LocationsPage/Location/Location"
import './App.css'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route  path="/IntensivReact" element={<HomePage />}/>
        <Route  path="/IntensivReact/characters" element={<CharactersPage />}/>
        <Route  path="/IntensivReact/characters/:id" element={<Character />}/>
        <Route  path="/IntensivReact/episodes" element={<EpisodePage />}/>
        <Route  path="/IntensivReact/episode/:id" element={<Episode />}/>
        <Route  path="/IntensivReact/locations" element={<LocationsPage />}/>
        <Route  path="/IntensivReact/location/:id" element={<Location />}/>
      </Routes>
    </div>
  )
}

export default App
