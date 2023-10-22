import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from "./pages/product/Product.jsx";
import Pricing from "./pages/pricing/Pricing.jsx";
import Homepage from "./pages/home-page/Homepage.jsx";
import PageNotFound from "./pages/page-not-found/PageNotFound.jsx";
import AppLayout from "./pages/app-layout/AppLayout.jsx";
import Login from "./pages/login/Login.jsx";
import CityList from "./component/city-list/CityList.jsx";
import {useEffect, useState} from "react";
import CountryList from "./component/country-list/CountryList.jsx";
import City from "./component/city/City.jsx";

const BASE_URL = 'http://localhost:9000'

export default function App() {

    const [cities, setCities] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchCities(){
            try {
                setIsLoading(true)
                const res = await fetch(`${BASE_URL}/cities`)
                const data = await res.json()
                setCities(data)
            } catch {
                alert('There was an error loading data...')
            } finally {
                setIsLoading(false)
            }
        }
        fetchCities()
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage/>}/>
                    <Route path="product" element={<Product/>}/>
                    <Route path="pricing" element={<Pricing/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="app" element={<AppLayout/>}>
                        <Route index element={<CityList cities={cities} isLoading={isLoading} />}/>
                        <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />}/>
                        <Route path="cities/:id" element={<City/>}/>
                        <Route path="countries" element={<CountryList isLoading={isLoading} cities={cities}/>}/>
                        <Route path="form" element={<p>enfant 3 ou l'on peut introduire un composant</p>}/>
                    </Route>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}