import style from "./Map.module.css"
import {useNavigate, useSearchParams} from "react-router-dom";
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents} from "react-leaflet";
import {useEffect, useState} from "react";
import {useCities} from "../../contexts/CitiesContext.jsx";
import Button from "../button/Button.jsx";
import {useGeolocation} from "../../hooks/useGeolocation.js";
import {useUrlPosition} from "../../hooks/useUrlPosition.js";

export default function Map() {

    const {cities} = useCities()

    const [mapPosition, setMapPosition] = useState([100, 0])
    const {isLoading: isLoadingPostion, position: geolocationPosition, getPosition} = useGeolocation();

    // const [searchParams] = useSearchParams();
    // const lat = searchParams.get("lat")
    // const lng = searchParams.get("lng")

    const [lat,lng] = useUrlPosition()

    useEffect(() => {
        if (lat && lng) setMapPosition([lat,lng])
    }, [lat, lng]);

    useEffect(() => {
        if(geolocationPosition)setMapPosition([geolocationPosition.lat, geolocationPosition.lng])
    }, [geolocationPosition]);

    return (
        <div className={style.mapContainer}>
            {!geolocationPosition && (<Button type='position' onClick={getPosition}>
                {isLoadingPostion ? 'Loading...' : "Use your position"}
            </Button>)}
            <MapContainer className={style.map} center={mapPosition} zoom={13} scrollWheelZoom={true} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {cities.map(city =>
                    <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
                        <Popup>
                            <span>{city.emoji}</span>
                            <span>{city.cityName}</span>
                        </Popup>
                    </Marker>
                )}
                <ChangerCenter position={mapPosition}/>
                <DetectClick/>
            </MapContainer>
        </div>
    );
}

function ChangerCenter({position}){
    const map = useMap()
    map.setView(position, 9)
    return null
}

function DetectClick(){
    const navigate = useNavigate()
    useMapEvents({
        click: (e) => navigate((`form?lat=${e.latlng.lat}&${e.latlng.lng}`)),
    })

}

