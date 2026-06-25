import { useEffect, useState } from "react"
import axios from "axios"

export const useLocationsPage = () => {
   const [locations, setLocations] = useState()
   const [error, setError] = useState(null)
   const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
      }
   )

   useEffect(() => {
      axios.get("https://rickandmortyapi.com/api/location")
      .then((res)=> {
         setLocations(res.data.results)
         setInfo(res.data.info)
      })
   
   }, [])

   const fetchData = (url) => {
    axios.get(url).then((res) => {
      setLocations(res.data.results)
      setInfo(res.data.info)
      setError(null)
    })
    .catch((err) => {
        setError(err.response.data.error)
      })
  }

  const searchHandler = (event) => {
    const value = event.currentTarget.value
    fetchData(`https://rickandmortyapi.com/api/location?name=${value}`)
  }
 
    const nextPageHandler = () => {
       fetchData(info.next)
    }
    const previousPageHandler = () => {
       fetchData(info.prev)
    }
    return {
      info,error,locations,previousPageHandler,nextPageHandler,searchHandler
    }
}
