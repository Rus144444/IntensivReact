import axios from "axios";
import type { CharacterType } from "../types/character";

const URL = "https://rickandmortyapi.com/api/character"

export const getCharacterById = async (id: string):Promise<CharacterType> => {
    const { data } = await axios.get<CharacterType>(`${URL}/${id}`)
    return data
}