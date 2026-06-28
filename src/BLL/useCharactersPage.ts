import { useState, useEffect, type ChangeEvent } from "react"
import { getCharacterByUrl } from "../DAL/character"
import type { InfoType } from "../types/location"
import type { CharacterType } from "../types/character"
const url = "https://rickandmortyapi.com/api/character"

export const useCharactersPage = () => {
    const [error, setError] = useState<string|null>(null)
        const [character, seCharacter] = useState<CharacterType[]>([])
        const [info, setInfo] = useState<InfoType>({
            count: 0,
            pages: 0,
            next: null,
            prev: null,
        }
    )
    useEffect(() => {
        getCharacterByUrl(url)
        .then((data) => {
        seCharacter(data.results)
        setInfo(data.info)
        })
    }, []);

    const fetchData = (url: string) => {
        getCharacterByUrl(url)
        .then((data) => {
        seCharacter(data.results)
        setInfo(data.info)
        setError(null)
        })
        .catch((err) => {
            setError(err.response?.data?.error ?? "Something went wrong")
        })
    }
    const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        fetchData(`${url}?name=${value}`)
    }
    const nextPageHandler = () => {
       if(info.next){
        fetchData(info.next)
       }
    }
    const previousPageHandler = () => {
        if(info.prev) { 
            fetchData(info.prev)
        }
    }
    return {
      info,
      character,
      error,
      searchHandler,
      nextPageHandler,
      previousPageHandler
    }
}
