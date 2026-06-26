import axios from "axios";
import type {EpisodeType} from "../types/episode";

const URL = "https://rickandmortyapi.com/api/episode";

export const getEpisodeById = async (id: string):Promise <EpisodeType> => {
    const { data } = await axios.get<EpisodeType>(`${URL}/${id}`);
    return data;
}
