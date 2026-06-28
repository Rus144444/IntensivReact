import { useState, useEffect } from "react"
import { getEpisodeByUrl } from "../DAL/episode"
import type { EpisodeType } from "../types/episode"
import type { InfoType } from "../types/location"
import type { ChangeEvent } from "react" 
const url = "https://rickandmortyapi.com/api/episode"

export const useEpisodePage = () => {
    const [episodes, setEpisodes] = useState<EpisodeType|null>(null)
    const [error, setError] = useState <string|null>(null)
    const [info, setInfo] = useState <InfoType>({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
      }
    )

     useEffect(() => {
        getEpisodeByUrl(url)
        .then((data) => {
        setEpisodes(data.results)
        setInfo(data.info)
        })
    }, [])

    const fetchData = (url: string) => {
      getEpisodeByUrl(url)
      .then((data) => {
      setEpisodes(data.results)
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
        info, error, episodes, searchHandler, nextPageHandler, previousPageHandler
    }
}
