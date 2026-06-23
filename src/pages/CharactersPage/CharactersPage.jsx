import { useState, useEffect } from "react"
import axios from "axios"
import { PageTitle } from "../../common/components/PageTitle/PageTitle"
import s from "./CharactersPage.module.css"
import { Link } from "react-router"
 
export const CharactersPage = () => {
    const [error, setError] = useState(null)
    const [character, seCharacter] = useState()
    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
      }
    )
  const fetchData = (url) => {
    axios.get(url).then((res) => {
      seCharacter(res.data.results)
      setInfo(res.data.info)
      setError(null)
    })
    .catch((err) => {
        setError(err.response.data.error)
      })
  }
  const searchHandler = (event) => {
    const value = event.currentTarget.value
    fetchData(`https://rickandmortyapi.com/api/character?name=${value}`)
  }
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character?page=2").then((res) => {
        seCharacter(res.data.results)
        setInfo(res.data.info)
        })
    }, [])
 
    const nextPageHandler = () => {
       fetchData(info.next)
    }
    const previousPageHandler = () => {
       fetchData(info.prev)
    }

return( 
    <div className="pageContainer"> 
        <PageTitle style={{fontSize: "70px"}} title="CharacterPage" />
        <input type="search" className="search" onChange={searchHandler} placeholder="Search..." />
        {error && <div className={s.errorMessage}>{error}</div>}
        {!error && <ul className={s.characters}>{character?.map(ch => (
            <li key={ch.id}>
                <div className={s.character}>
                    <Link to={`/IntensivReact/characters/${ch.id}`} className={s.characterLink} >{ch.name}</Link>
                    <img src={ch.image} alt={`${ch.name} avatar`} />
                </div>
            </li>
        ))}    
        </ul>}
        <div className="buttonContainer">
            <button className="linkButton" disabled={info.prev === null} onClick={previousPageHandler}>
              Назад
            </button>
            <button className="linkButton" disabled={info.next === null} onClick={nextPageHandler}>
              Вперед
            </button>
        </div>
    </div>
)}