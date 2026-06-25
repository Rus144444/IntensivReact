import { useEffect, useState } from "react"
import axios from "axios"
import {Link, useParams } from "react-router";


export const Location = () => {
    const { id } = useParams();
    const [ element, setElement ] = useState(null)
    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res)=> {
         setElement(res.data)
      })
   
   }, [])

   if(!element) <div>
                   <h2>Loading...</h2>
               </div>

   return (
      <div className="pageContainer">
            <div className="container">
                <h1 className="pageTitle">{element?.name}</h1>
                <ul>
                    <li className="subTitleResult">{element?.type}</li>
                    <li className="subTitleResult">{element?.dimension}</li>
                    <li className="subTitleResult">{element?.url}</li>
                    <ol className="subTitleResult">
                        {element?.residents.map((resident)=><li key={resident}>
                            <div className="subTitleResult">
                                {resident}
                            </div>
                        </li>)}
                    </ol>
                </ul>
                <Link to="/IntensivReact/locations"
                    className="backButton"
                >
                    ← Go Back
                </Link>
        </div>          
      </div>
   )
}