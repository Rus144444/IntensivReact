import {Link } from "react-router";
import { useLocationDetails } from "../../../../BLL/useLocationDetails"
import { PATH } from "../../../common/routing/path";

export const Location = () => {
    const { currentLocation } = useLocationDetails()
    if(!currentLocation) return <div><h2>Loading...</h2></div>
    return (
      <div className="pageContainer">
            <div className="container">
                <h1 className="pageTitle">{currentLocation.name}</h1>
                <ul>
                    <li className="subTitleResult">{currentLocation.type}</li>
                    <li className="subTitleResult">{currentLocation.dimension}</li>
                    <li className="subTitleResult">{currentLocation.url}</li>
                    <li className="subTitleResult">
                        <p className="subTitle">Residents</p>
                        <ol>
                            {currentLocation?.residents.map((resident)=><li key={resident} className="subTitleResult">
                                {resident}
                            </li>)}
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