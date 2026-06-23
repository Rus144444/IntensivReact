import { useParams } from "react-router"
import { useEffect, useState } from "react";
import axios from 'axios'

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
    return(
        <div>{episode && episode.name}</div>
    )
}