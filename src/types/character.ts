import type { InfoType } from "./location";

export type CharacterType = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}

export type CharacterResponse = {
  info: InfoType;
  results: CharacterType[];
};   