import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCharacterById } from "../DAL/character";
import type { CharacterType } from "../types/character";

export const useCharacter = () => {
    const { id } = useParams<{id: string}>();
    const [character, setCharacter] = useState<CharacterType |null>(null);
    useEffect(() => {
        if (!id) return;
        getCharacterById(id)
        .then((data) => setCharacter(data))
        .catch((err) => console.error(err));
    }, [id]);

    return { character }
}