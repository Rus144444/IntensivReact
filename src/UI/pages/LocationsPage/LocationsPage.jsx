import {PageTitle} from "../../common/components/PageTitle/PageTitle"
import { Link } from "react-router"
import { useLocationsPage } from "../../../BLL/useLocationsPage"

export const LocationsPage = () => {
   const {info,error,locations,previousPageHandler,nextPageHandler,searchHandler} = useLocationsPage()
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