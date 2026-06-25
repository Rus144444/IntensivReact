import { useParams } from "react-router"
import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router";

export const Episode = () => {
    const { id } = useParams();
    const [episode, setEpisode] = useState(null);
    
    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/episode/${id}`)
            .then((res) => {
                setEpisode(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);
    if (!episode) {
        return (
            <div className="pageContainer">
                <h2>Loading...</h2>
            </div>
        );
    }
    return (
        <div className="pageContainer">
            <div className="container">
                <h1 className="pageTitle">
                    {episode?.name}
                </h1>
                 <div className="content">
                    <div className="description">
                        <div className="info">
                            <p className="subTitle">Data</p>
                            <p className="subTitleResult">
                                {episode?.air_date}
                            </p>
                        </div>
                        <div className="info">
                            <p className="subTitle">Origin</p>
                            <p className="subTitleResult">
                                {episode?.episode}
                            </p>
                        </div>
                        <div className="info">
                            <p className="subTitle">Last known location</p>
                            <div className="subTitleResult">
                                {episode?.characters.map((character) => <div key={character}>{character}</div>)}
                            </div>
                        </div>
                        <div className="info">
                            <p className="subTitle">Episode count</p>
                            <p className="subTitleResult">
                                {episode?.url}
                            </p>
                        </div>
                        <div className="info">
                            <p className="subTitle">Data count</p>
                            <p className="subTitleResult">
                                {episode?.created}
                            </p>
                        </div>
                    </div>
                </div>
                <Link
                    to="/IntensivReact/episodes"
                    className="backButton"
                >
                    ← Go Back
                </Link>
            </div>
        </div>
    );
}