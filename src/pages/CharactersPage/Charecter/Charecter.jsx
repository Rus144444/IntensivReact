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
        <div className={s.pageContainer}>
            <div className={s.container}>
                <h1 className={s.pageTitle}>
                    {character.name}
                </h1>

                <div className={s.content}>
                    <img
                        className={s.img}
                        src={character.image}
                        alt={character.name}
                    />

                    <div className={s.description}>
                        <div className={s.statusContainer}>
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

                        <div className={s.info}>
                            <p className={s.subTitle}>Gender</p>
                            <p className={s.subTitleResult}>
                                {character.gender}
                            </p>
                        </div>

                        <div className={s.info}>
                            <p className={s.subTitle}>Origin</p>
                            <p className={s.subTitleResult}>
                                {character.origin.name}
                            </p>
                        </div>

                        <div className={s.info}>
                            <p className={s.subTitle}>Last known location</p>
                            <p className={s.subTitleResult}>
                                {character.location.name}
                            </p>
                        </div>

                        <div className={s.info}>
                            <p className={s.subTitle}>Episode count</p>
                            <p className={s.subTitleResult}>
                                {character.episode.length}
                            </p>
                        </div>
                    </div>
                </div>

                <Link
                    to="/characters"
                    className={s.backButton}
                >
                    ← Go Back
                </Link>
            </div>
        </div>
    );
};