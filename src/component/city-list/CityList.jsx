import style from "./CityList.module.css"
import Spinner from "../spinner/Spinner.jsx";
import CityItem from "../city-item/CityItem.jsx";
import Message from "../message/Message.jsx";

export default function CityList({cities, isLoading}) {

    if(isLoading) return <Spinner/>
    if(!cities.length) return <Message message="Add your city by clicking a city on the map."/>

  return (
    <ul className={style.cityList}>
        {cities.map((city) => <CityItem city={city} key={city.id}/>)}
    </ul>
  );
}


