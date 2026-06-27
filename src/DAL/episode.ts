import axios from "axios";
import type {EpisodeType, EpisodeResponse} from "../types/episode";

const URL = "https://rickandmortyapi.com/api/episode";

export const getEpisodeById = async (id: string):Promise <EpisodeType> => {
    const { data } = await axios.get<EpisodeType>(`${URL}/${id}`);
    return data;
}

export const getEpisode = async ():Promise <EpisodeResponse> => {
    const { data } = await axios.get<EpisodeResponse>(URL);
    return data;
};

export const getEpisodeByUrl = async (url: string): Promise<EpisodeResponse> => {
    const { data } = await axios.get<EpisodeResponse>(url);
    return data
}