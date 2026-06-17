import { useState, useEffect } from "react"
import axios from "axios"
import { PageTitle } from "../../common/components/PageTitle/PageTitle"
import s from "./CharacterPage.module.css"


export const CharacterPage = () => {
    const [character, seCharacter] = useState()

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character?page=2").then((res) => {
        seCharacter(res.data.results)
        })
    }, [])
 
    return <div className="pageContainer"> 
        <PageTitle style={{fontSize: "70px"}} title="CharacterPage" />
        <ul className={s.characters}>{character?.map(ch => <li key={ch.id}>
                <div className={s.character}>
                <div className={s.characterLink}>{ch.name}</div>
                <img src={ch.image} alt={`${ch.name} avatar`} />
            </div>
        </li>)}</ul>
        
    </div>
}