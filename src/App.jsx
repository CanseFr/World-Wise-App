import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {CitiesProvider} from "./contexts/CitiesContext.jsx";
import Product from "./pages/product/Product.jsx";
import Pricing from "./pages/pricing/Pricing.jsx";
import Homepage from "./pages/home-page/Homepage.jsx";
import PageNotFound from "./pages/page-not-found/PageNotFound.jsx";
import AppLayout from "./pages/app-layout/AppLayout.jsx";
import Login from "./pages/login/Login.jsx";
import CityList from "./component/city-list/CityList.jsx";
import CountryList from "./component/country-list/CountryList.jsx";
import City from "./component/city/City.jsx"
import Form from "./component/form/Form.jsx"
import {AuthProvider} from "./contexts/FakeAuthContext.jsx";


export default function App() {
    return (
        <>
            <AuthProvider>
                <CitiesProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route index element={<Homepage/>}/>
                            <Route path="product" element={<Product/>}/>
                            <Route path="pricing" element={<Pricing/>}/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="app" element={<AppLayout/>}>
                                <Route index element={<Navigate replace to={'cities'}/>}/>
                                <Route path="cities" element={<CityList/>}/>
                                <Route path="cities/:id" element={<City/>}/>
                                <Route path="countries" element={<CountryList/>}/>
                                <Route path="form" element={<Form/>}/>
                            </Route>
                            <Route path="*" element={<PageNotFound/>}/>
                        </Routes>
                    </BrowserRouter>
                </CitiesProvider>
            </AuthProvider>
        </>
    )
}