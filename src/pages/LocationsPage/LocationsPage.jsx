import { useEffect, useState } from "react"
import {PageTitle} from "../../common/components/PageTitle/PageTitle"
import axios from "axios"
import { Link } from "react-router"

export const LocationsPage = () => {
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
   return (
      <div>
         <PageTitle title="Location" style={{fontSize: "70px"}}/>
            <div>
               <input type="search" className="search" onChange={searchHandler} placeholder="Search..." />
               {error && <div className="errorMessage">{error}</div>}
               {!error && <div>

                  {locations && locations.map((location) => <div key={location.id}>
                  <ul>
                     <Link to={`/IntensivReact/location/${location.id}`}>{location.name}</Link>
                     <li className="item">{location.type}</li>
                     <li>{location.dimension}</li>
                     <li>{location.url}</li>
                     <li>{location.created}</li>
                     <hr />
                  </ul>
               </div>)}
               <div className="buttonContainer">
                  <button className="linkButton" disabled={info.prev === null} onClick={previousPageHandler}>
                        Назад
                  </button>
                  <button className="linkButton" disabled={info.next === null} onClick={nextPageHandler}>
                        Вперед
                  </button>
               </div>
            </div>}
         </div>
      </div>
   )
}