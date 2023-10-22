import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from "./pages/product/Product.jsx";
import Pricing from "./pages/pricing/Pricing.jsx";
import Homepage from "./pages/home-page/Homepage.jsx";
import PageNotFound from "./pages/page-not-found/PageNotFound.jsx";
import AppLayout from "./pages/app-layout/AppLayout.jsx";
import Login from "./pages/login/Login.jsx";

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="product" element={<Product/>}/>
                    <Route path="pricing" element={<Pricing/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="app" element={<AppLayout/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}