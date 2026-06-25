import { useState, useEffect } from "react"
import axios from "axios"

export const useCharactersPage = () => {
    const [error, setError] = useState(null)
        const [character, seCharacter] = useState(null)
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

    return {
      info,
      character,
      error,
      searchHandler,
      nextPageHandler,
      previousPageHandler
    }
}
