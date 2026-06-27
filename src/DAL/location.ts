import axios from "axios";
import type { LocationType, LocationsResponse } from "../types/location";

const URL = "https://rickandmortyapi.com/api/location";

export const getLocationById = async (id: string): Promise<LocationType> => {
  const { data } = await axios.get<LocationType>(`${URL}/${id}`);
  return data;
};

export const getLocations = async (): Promise<LocationsResponse> => {
  const { data } = await axios.get<LocationsResponse>(URL);
  return data;
};

export const getLocationsByUrl = async (url: string): Promise<LocationsResponse> => {
  const { data } = await axios.get<LocationsResponse>(url);
  return data;
};