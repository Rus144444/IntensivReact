import { useState, useEffect } from "react"
import axios from "axios"
import { PageTitle } from "../../common/components/PageTitle/PageTitle"
import s from "./CharacterPage.module.css"

 
export const CharacterPage = () => {
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
    })
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
        <ul className={s.characters}>{character?.map(ch => (
            <li key={ch.id}>
                <div className={s.character}>
                    <div className={s.characterLink}>{ch.name}</div>
                    <img src={ch.image} alt={`${ch.name} avatar`} />
                </div>
            </li>
        ))}    
        </ul>
        <div className={s.buttonContainer}>
            <button className={s.linkButton} disabled={info.prev === null} onClick={previousPageHandler}>
              Назад
            </button>
            <button className={s.linkButton} disabled={info.next === null} onClick={nextPageHandler}>
              Вперед
            </button>
        </div>
    </div>
)}