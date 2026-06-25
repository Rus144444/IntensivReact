import { useState, useEffect } from "react"
import axios from "axios"

export const useEpisodePage = () => {
    const [episodes, setEpisodes] = useState(null)
    const [error, setError] = useState(null)
    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
      }
    )

    const fetchData = (url) => {
    axios.get(url).then((res) => {
      setEpisodes(res.data.results)
      setInfo(res.data.info)
      setError(null)
    })
    .catch((err) => {
        setError(err.response.data.error)
      })
  }

  const searchHandler = (event) => {
    const value = event.currentTarget.value
    fetchData(`https://rickandmortyapi.com/api/episode?name=${value}`)
  }
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode?page=1").then((res) => {
        setEpisodes(res.data.results)
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
        info, error, episodes, searchHandler, nextPageHandler, previousPageHandler
    }
}
