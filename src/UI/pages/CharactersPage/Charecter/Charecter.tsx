import { Link } from "react-router";
import { useCharacter } from "../../../../BLL/useCharacter";
import s from "./Charecter.module.css";
import { PATH } from "../../../common/routing/path";

export const Character = () => {    
    const {character} = useCharacter()    
    
    if (!character) {
        return (
            <div className={s.pageContainer}>
                <h2>Loading...</h2>
            </div>
        );
    }

    const statusClass = character.status === "Alive" 
        ? s.alive
        : character.status === "Dead"
        ? s.dead
        : s.unknown
        
    return (

        <div className="pageContainer">
            <div className="container">
                <h1 className="pageTitle">
                    {character.name}
                </h1>
                 <div className="content">
                    <img
                        className="img"
                        src={character.image}
                        alt={character.name}
                    />
                    <div className="description">
                        <div className="statusContainer">
                           <span className={`${s.statusDot} ${statusClass}`} />
                            {character.status} — {character.species}
                        </div>
                        <div className="info">
                            <p className="subTitle">Gender</p>
                            <p className="subTitleResult">
                                {character.gender}
                            </p>
                        </div>
                        <div className="info">
                            <p className="subTitle">Origin</p>
                            <p className="subTitleResult">
                                {character.origin.name}
                            </p>
                        </div>
                        <div className="info">
                            <p className="subTitle">Last known location</p>
                            <p className="subTitleResult">
                                {character.location.name}
                            </p>
                        </div>
                        <div className="info">
                            <p className="subTitle">Episode count</p>
                            <p className="subTitleResult">
                                {character.episode.length}
                            </p>
                        </div>
                    </div>
                </div>
                <Link
                    to={PATH.CHARACTERS}
                    className="backButton"
                >
                    ← Go Back
                </Link>
            </div>
        </div>
    );
};