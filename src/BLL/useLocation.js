import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router";

export const useLocation = () => {
    const { id } = useParams();
    const [ element, setElement ] = useState(null)
    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res)=> {
         setElement(res.data)
      })
   }, [])

    return {
        element
    }
}
