import { Routes, Route} from "react-router"
import { Header } from "./common/components/Header/Header.tsx"
import { HomePage } from "./pages/HomePage/HomePage.tsx"
import { CharactersPage } from "./pages/CharactersPage/CharactersPage.tsx"
import { Character} from "./pages/CharactersPage/Charecter/Charecter.tsx"
import { EpisodePage} from "./pages/EpisodePage/EpisodePage.tsx"
import { Episode } from "./pages/EpisodePage/Episode/Episode.tsx"
import { LocationsPage } from "./pages/LocationsPage/LocationsPage.tsx"
import { Location } from "./pages/LocationsPage/Location/Location.tsx"
import { PATH } from "./common/routing/path.ts"

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path={PATH.HOME} element={<HomePage />} />
        <Route path={PATH.CHARACTERS} element={<CharactersPage />} />
        <Route path={PATH.CHARACTER} element={<Character />} />
        <Route path={PATH.EPISODES} element={<EpisodePage />} />
        <Route path={PATH.EPISODE} element={<Episode />} />
        <Route path={PATH.LOCATIONS} element={<LocationsPage />} />
        <Route path={PATH.LOCATION} element={<Location />} />
      </Routes>
    </div>
  )
}

export default App
