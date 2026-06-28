import type { InfoType } from "./location"
 
export type EpisodeType = {
      id: number;
      name: string;
      air_date: string;
      episode: string;
      characters: string[];
      url: string;
      created: string;
    }

export type EpisodeResponse = {
    results: EpisodeType[]
    info: InfoType;
}
