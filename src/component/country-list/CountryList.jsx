import Spinner from "../spinner/Spinner.jsx";
import Message from "../message/Message.jsx";
import styles from "./CountryList.module.css";
import CountryItem from "../country-item/CountryItem.jsx";
import useCities from "../city/City.jsx";

export default function CountryList() {

    const {cities, isLoading} = useCities()

    if (isLoading) return <Spinner/>
    if (!cities.length) return <Message message="Add your country by clicking a country on the map."/>

    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country))
            return [...arr, {country: city.country, emoji: city.emoji}]
        else return arr
    }, [])

    return (
        <ul className={styles.countryList}>
            {countries.map((country) => <CountryItem country={country} key={country.id}/>)}
        </ul>
    );
}

