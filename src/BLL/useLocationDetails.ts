import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { getLocationById } from "../DAL/location"
import {type LocationType} from "../types/location"

export const useLocationDetails = () => {
    const { id } = useParams<{id: string}>();
    const [ currentLocation, setCurrentLocation ] = useState<LocationType | null>(null)
    useEffect(() => {
        if (!id) return;

        getLocationById(id)
        .then((data)=> {
        setCurrentLocation(data)
      })
    }, [id])
    return { currentLocation }
}
