import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from "./pages/product/Product.jsx";
import Pricing from "./pages/pricing/Pricing.jsx";
import Homepage from "./pages/home-page/Homepage.jsx";
import PageNotFound from "./pages/page-not-found/PageNotFound.jsx";
import AppLayout from "./pages/app-layout/AppLayout.jsx";
import Login from "./pages/login/Login.jsx";
import CityList from "./component/city-list/CityList.jsx";

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage/>}/>
                    <Route path="product" element={<Product/>}/>
                    <Route path="pricing" element={<Pricing/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="app" element={<AppLayout/>}>
                        <Route index element={<CityList/>}/>
                        <Route path="cities" element={<CityList/>}/>
                        <Route path="countries" element={<p>enfant 2 ou l'on peut introduire un composant</p>}/>
                        <Route path="form" element={<p>enfant 3 ou l'on peut introduire un composant</p>}/>
                    </Route>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}