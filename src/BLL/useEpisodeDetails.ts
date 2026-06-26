import { useParams } from "react-router"
import { useEffect, useState } from "react";
import { getEpisodeById } from "../DAL/episode"
import type { EpisodeType } from "../types/episode";

export const useEpisodeDetails = () => {
    const { id } = useParams<{id: string}>();
    const [episode, setEpisode] = useState<EpisodeType | null>(null);
    
    useEffect(() => {
         if (!id) return;
         getEpisodeById(id)    
            .then((data) => setEpisode(data))
            .catch((err) => console.error(err));
    }, [id]);

    return {episode}
}
