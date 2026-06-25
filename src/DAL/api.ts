import axios from "axios";
import { type LocationType } from "../types/location.ts";

export const getLocationById = async (id: string): Promise<LocationType> => {
  const { data } = await axios.get<LocationType>(
    `https://rickandmortyapi.com/api/location/${id}`
  );

  return data;
};