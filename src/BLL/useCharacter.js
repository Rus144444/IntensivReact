import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export const useCharacter = () => {
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

    return { character }
}