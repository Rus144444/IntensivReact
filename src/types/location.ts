export type LocationType = {
id: number;
    name: string;
    type: string;
    dimension: string;
    residents: ResidentsType
    url: string;
    created: string;
}

type ResidentsType = string[];
 
 export type InfoType = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type LocationsResponse = {
  info: InfoType;
  results: LocationType[];
};   