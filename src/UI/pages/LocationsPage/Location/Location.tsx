import {Link } from "react-router";
import { useLocationDetails } from "../../../../BLL/useLocationDetails"
import { PATH } from "../../../common/routing/path";

export const Location = () => {
    const { currentLocation } = useLocationDetails()
    
    if(!currentLocation) return <div><h2>Loading...</h2></div>
        const {name, type, dimension, url,created, residents} = currentLocation
    
    return (
      <div className="pageContainer">
            <div className="container">
                <h1 className="pageTitle">{name}</h1>
                <ul>
                    <li className="subTitleResult">{type}</li>
                    <li className="subTitleResult">{dimension}</li>
                    <li className="subTitleResult">{url}</li>
                    <li className="subTitleResult">{created}</li>
                    <li className="subTitleResult">
                        <p className="subTitle">Residents</p>
                        <ol>
                            {residents.map((resident: string) => (
                                <li key={resident} className="subTitleResult">
                                    {resident}
                                </li>
                            ))}
                        </ol>
                    </li>
                </ul>
                <Link to={PATH.LOCATIONS}
                    className="backButton"
                >
                    ← Go Back
                </Link>
        </div>          
      </div>
   )
}