import { useEffect, useState } from "react"
import { getLocationsByUrl} from "../DAL/location"
import { type LocationType, type InfoType } from "../types/location"     
import type { ChangeEvent } from "react";
const url = "https://rickandmortyapi.com/api/location"  

export const useLocationsPage = () => {
   const [locations, setLocations] = useState<LocationType[]>([])
   const [error, setError] = useState <string|null>(null)
   const [info, setInfo] = useState<InfoType>({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
      }
   )

   useEffect(() => {
      getLocationsByUrl(url)
      .then((data)=> {
         setLocations(data.results)
         setInfo(data.info)
      })
   
   }, [])

   const fetchData = (url: string) => {
      getLocationsByUrl(url)
      .then((data) => {
      setLocations(data.results)
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
      if(info.next) {
         fetchData(info.next)
      }
    }
    const previousPageHandler = () => {
      if(info.prev) { 
         fetchData(info.prev)
      }
    }
    return {
      info,error,locations,previousPageHandler,nextPageHandler,searchHandler
    }
}
