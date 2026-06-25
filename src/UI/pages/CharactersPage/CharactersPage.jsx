
import { PageTitle } from "../../common/components/PageTitle/PageTitle"
import s from "./CharactersPage.module.css"
import { Link } from "react-router"
import { useCharactersPage } from "../../../BLL/useCharactersPage"
import { PATH } from "../../common/routing/path"
 
export const CharactersPage = () => {
  const { info ,character, error, searchHandler, nextPageHandler, previousPageHandler } = useCharactersPage()    

return( 
    <div className="pageContainer"> 
        <PageTitle style={{fontSize: "70px"}} title="CharacterPage" />
        <input type="search" className="search" onChange={searchHandler} placeholder="Search..." />
        {error && <div className="errorMessage">{error}</div>}
        {!error && <div><ul className={s.characters}>{character?.map(ch => (
            <li key={ch.id}>
                <div className={s.character}>
                    <Link to={`${PATH.CHARACTER}/${ch.id}`} className={s.characterLink} >{ch.name}</Link>
                    <img src={ch.image} alt={`${ch.name} avatar`} />
                </div>
            </li>
        ))}    
        </ul>
        <div className="buttonContainer">
            <button className="linkButton" disabled={info.prev === null} onClick={previousPageHandler}>
              Назад
            </button>
            <button className="linkButton" disabled={info.next === null} onClick={nextPageHandler}>
              Вперед
            </button>
        </div>
      </div>}
    </div>
)}