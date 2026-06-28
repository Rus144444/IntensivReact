import axios from "axios";
import type { CharacterType, CharacterResponse } from "../types/character";

const URL = "https://rickandmortyapi.com/api/character"

export const getCharacterById = async (id: string):Promise<CharacterType> => {
    const { data } = await axios.get<CharacterType>(`${URL}/${id}`)
    return data
}

export const getCharacter = async (): Promise<CharacterResponse> => {
    const { data } = await axios<CharacterResponse>(URL)
    return data
}

export const getCharacterByUrl = async (url: string): Promise<CharacterResponse> => {
    const { data } = await axios<CharacterResponse>(url)
    return data
}


