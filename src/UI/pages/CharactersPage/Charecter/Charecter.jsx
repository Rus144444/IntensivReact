import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";
import s from "./Charecter.module.css";

export const Character = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => {
                setCharacter(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);
    if (!character) {
        return (
            <div className={s.pageContainer}>
                <h2>Loading...</h2>
            </div>
        );
    }
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
                            <span
                                className={`${s.statusDot} ${
                                    character.status === "Alive"
                                        ? s.alive
                                        : character.status === "Dead"
                                        ? s.dead
                                        : s.unknown
                                }`}
                            />
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
                    to="/IntensivReact/characters"
                    className="backButton"
                >
                    ← Go Back
                </Link>
            </div>
        </div>
    );
};