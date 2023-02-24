import React from 'react'
import {Route, Routes} from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import ProductItem from "./pages/ProductItem/ProductItem";
import Header from "./components/Header/Header";

export default function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={''} element={<ProductList/>}/>
                <Route path={'/:id'} element={<ProductItem/>}/>
            </Routes>
        </div>
    )
}
